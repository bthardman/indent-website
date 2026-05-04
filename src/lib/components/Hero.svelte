<script lang="ts">
	import Marquee from './Marquee.svelte';

	let active = $state(false);

	type Props = {
		latestAnchor: string;
		latestTitle: string;
	};

	let { latestAnchor, latestTitle }: Props = $props();
</script>

<section class="grid-lines border-b border-[var(--border-strong)] px-6 py-16 md:px-10 md:py-24">
	<p class="section-label mb-6">// 01 - HERO</p>
	<h1
		class="glitch-text text-6xl font-bold uppercase leading-[0.9] tracking-[0.15em] md:text-8xl lg:text-[11rem]"
		class:is-active={active}
		data-text="INDENT"
		onmouseenter={() => (active = true)}
		onmouseleave={() => (active = false)}
	>
		INDENT
	</h1>
	<p class="mt-6 max-w-3xl text-sm uppercase tracking-[0.2em] text-[var(--muted)] md:text-base">
		Electronic textures, precise rhythms, and brutalist sound structures.
	</p>
	<a
		class="surface mt-10 inline-flex px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-[var(--accent)] hover:text-black"
		href={latestAnchor}
	>
		LATEST -> {latestTitle}
	</a>
	<div class="mt-12 border-y border-[var(--border-strong)] py-3">
		<Marquee
			text="INDENT // ELECTRONIC MUSIC // NEW RELEASES // BUY ON BANDCAMP // INDENT // ELECTRONIC MUSIC //"
		/>
	</div>
</section>
