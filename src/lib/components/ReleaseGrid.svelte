<script lang="ts">
	import { reveal } from '$lib/effects/reveal';
	import type { Release } from '$lib/releases';
	import ReleaseCard from './ReleaseCard.svelte';

	type Props = {
		releases: Release[];
	};

	let { releases }: Props = $props();
	let expandedSlug = $state<string | null>(null);

	$effect(() => {
		if (!expandedSlug && releases[0]?.slug) {
			expandedSlug = releases[0].slug;
		}
	});

	function onToggle(slug: string) {
		expandedSlug = expandedSlug === slug ? null : slug;
	}
</script>

<section id="releases" class="px-6 py-16 md:px-10 md:py-24">
	<p class="section-label mb-6">// 02 - RELEASES</p>
	<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each releases as release}
			<div use:reveal id={release.slug}>
				<ReleaseCard {release} expanded={expandedSlug === release.slug} {onToggle} />
			</div>
		{/each}
	</div>
</section>
