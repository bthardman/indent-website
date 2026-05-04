<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Links from '$lib/components/Links.svelte';
	import ReleaseGrid from '$lib/components/ReleaseGrid.svelte';
	import { releases } from '$lib/releases';

	const latestRelease = releases[0];
</script>

<div id="top" class="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
	<Hero latestAnchor={`#${latestRelease.slug}`} latestTitle={latestRelease.title} />
	<ReleaseGrid {releases} />
	<About />
	<Links />
	<Footer />
</div>
