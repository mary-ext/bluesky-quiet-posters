import { For, createSignal } from 'solid-js';

import { Agent } from '@externdefs/bluesky-client/agent';
import type { RefOf } from '@externdefs/bluesky-client/atp-schema';

import { formatAbsDateTime, formatReltime } from './intl.ts';

import defaultAvatar from './assets/default-avatar.svg';

const agent = new Agent({ serviceUri: 'https://api.bsky.app' });

interface ProfileActivity {
	profile: RefOf<'app.bsky.actor.defs#profileView'>;
	// activityCount: number;
	lastActivity: number | undefined;
}

// const ACTIVITY_LIMIT = 20;
const EMPTY_ARRAY: never[] = [];

const sortProfileActivities = (a: ProfileActivity, b: ProfileActivity) => {
	return (a.lastActivity ?? -1) - (b.lastActivity ?? -1);
};

const App = () => {
	let controller: AbortController | undefined;

	const [message, setMessage] = createSignal<string>();
	const [activities, setActivities] = createSignal<ProfileActivity[]>(EMPTY_ARRAY);

	const go = async (handle: string, signal: AbortSignal) => {
		let follows: RefOf<'app.bsky.actor.defs#profileView'>[] = [];
		let followCursor: string | undefined;

		do {
			setMessage(`Retrieving your follows (${follows.length} users)`);

			const response = await agent.rpc.get('app.bsky.graph.getFollows', {
				signal: signal,
				params: {
					actor: handle,
					cursor: followCursor,
				},
			});

			const data = response.data;

			follows = follows.concat(data.follows);
			followCursor = data.cursor;
		} while (followCursor !== undefined);

		let acts: ProfileActivity[] = [];

		for (let idx = 0, len = follows.length; idx < len; idx++) {
			const profile = follows[idx];

			setMessage(`Retrieving @${profile.handle} (${idx + 1}/${len})`);

			const response = await agent.rpc.get('app.bsky.feed.getAuthorFeed', {
				signal: signal,
				params: {
					actor: profile.did,
					// limit: ACTIVITY_LIMIT + 1,
					limit: 1,
				},
			});

			const feed = response.data.feed;
			// const now = new Date();

			// let activityCount = 0;
			let lastActivity: number | undefined;

			for (let idx = 0, len = feed.length; idx < len; idx++) {
				const { post, reason } = feed[idx];

				const date = new Date(reason ? reason.indexedAt : post.indexedAt);

				// if (
				// 	now.getDate() === date.getDate() &&
				// 	now.getMonth() === date.getMonth() &&
				// 	now.getFullYear() === date.getFullYear()
				// ) {
				// 	activityCount++;
				// }

				lastActivity ??= date.getTime();
			}

			acts = acts.concat({
				profile: profile,
				// activityCount: activityCount,
				lastActivity: lastActivity,
			});
			acts.sort(sortProfileActivities);

			setActivities(acts);
		}

		setMessage(`Done.`);
	};

	const handleSubmit = (ev: SubmitEvent) => {
		const formData = new FormData(ev.currentTarget as HTMLFormElement);
		ev.preventDefault();

		const handle = (formData.get('handle') as string).replace(/^@/, '');

		controller?.abort();
		controller = new AbortController();

		const signal = controller.signal;

		setActivities(EMPTY_ARRAY);
		go(handle, signal).catch((err) => {
			if (signal.aborted) {
				return;
			}

			setMessage(`Oops, an error occured. ${err}`);
		});
	};

	return (
		<div>
			<h3>Bluesky quiet posters</h3>
			<p>List of your follows sorted by least active</p>

			<form onSubmit={handleSubmit} class="input-form">
				<input
					type="text"
					name="handle"
					required
					placeholder="example.bsky.social"
					pattern="@?([a-zA-Z0-9\\-]+(?:\\.[a-zA-Z0-9\\-]+)*(?:\\.[a-zA-Z]+))|did:[a-z]+:[a-zA-Z0-9._\\-]+"
					title="Bluesky handle or DID"
				/>

				<button type="submit">Go!</button>
			</form>

			<hr />

			<div class="message-info">{message()}</div>

			<div class="profile-list">
				<For each={activities()}>
					{({ profile, lastActivity }) => {
						const url = `https://bsky.app/profile/${profile.did}`;

						return (
							<a href={url} target="_blank" class="profile">
								<img src={/* @once */ profile.avatar || defaultAvatar} class="profile-avatar" />

								<div class="profile-info">
									<p class="profile-name">{/* @once */ profile.displayName || `@${profile.handle}`}</p>
									<div class="profile-subinfo">
										<span class="profile-handle">@{/* @once */ profile.handle}</span>
										<span class="dot">·</span>

										{
											/* @once */ lastActivity !== undefined ? (
												<span title={/* @once */ formatAbsDateTime(lastActivity)} class="profile-activity">
													{/* @once */ formatReltime(lastActivity)}
												</span>
											) : (
												<span class="profile-activity is-empty">no activity</span>
											)
										}
									</div>
								</div>
							</a>
						);
					}}
				</For>
			</div>
		</div>
	);
};

export default App;
