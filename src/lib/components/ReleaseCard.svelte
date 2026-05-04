<script lang="ts">
	import { scramble } from '$lib/effects/scramble';
	import type { Release } from '$lib/releases';

	type Props = {
		release: Release;
		expanded: boolean;
		onToggle: (slug: string) => void;
	};

	let { release, expanded, onToggle }: Props = $props();

	const embedUrl = $derived(
		`https://bandcamp.com/EmbeddedPlayer/${release.bandcampEmbed.type}=${release.bandcampEmbed.id}/size=large/bgcol=0a0a0a/linkcol=c6ff00/artwork=small/transparent=true/`
	);

	const links = $derived(
		Object.entries(release.links).filter(([, value]) => typeof value === 'string') as [string, string][]
	);
</script>

<article class="surface p-4 md:p-5">
	<button
		type="button"
		class="w-full text-left"
		onclick={() => onToggle(release.slug)}
		aria-expanded={expanded}
		aria-controls={`release-${release.slug}`}
	>
		<div class="relative overflow-hidden border border-[var(--border-strong)]">
			<img
				class="aspect-square w-full object-cover transition duration-300 hover:scale-[1.03]"
				src={release.cover}
				alt={`${release.title} artwork`}
				loading="lazy"
			/>
		</div>
		<div class="mt-4 flex items-start justify-between gap-4">
			<div>
				<h3 use:scramble class="text-lg font-bold uppercase tracking-[0.1em]">{release.title}</h3>
				<p class="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
					{release.releaseDate}{release.label ? ` // ${release.label}` : ''}
				</p>
			</div>
			<span class="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{expanded ? 'Close' : 'Open'}</span>
		</div>
	</button>

	{#if expanded}
		<div id={`release-${release.slug}`} class="mt-5 border-t border-[var(--border-strong)] pt-5">
			<iframe
				title={`${release.title} Bandcamp player`}
				class="h-[120px] w-full border-0"
				src={embedUrl}
				loading="lazy"
				seamless
			>
			</iframe>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each links as [name, url]}
					<a
						use:scramble
						class="surface px-3 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-[var(--accent)] hover:text-black"
						href={url}
						target="_blank"
						rel="noreferrer"
					>
						{name === 'bandcamp' ? 'Buy On Bandcamp' : name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</article>
