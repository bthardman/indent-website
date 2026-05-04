<script lang="ts">
	import { reveal } from '$lib/effects/reveal';
	import { scramble } from '$lib/effects/scramble';

	const rows = [
		{ label: 'Bandcamp', href: 'https://indent-uk.bandcamp.com/music' },
		{ label: 'Instagram', href: 'https://www.instagram.com/_indent' },
		{ label: 'SoundCloud', href: 'https://soundcloud.com/indent_uk' },
		{
			label: 'Spotify',
			href: 'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	];
</script>

<section id="links" class="px-6 py-16 md:px-10 md:py-24">
	<div use:reveal>
		<p class="section-label mb-6">// 04 - LINKS / CONTACT</p>
		<div class="space-y-2">
			{#each rows as row}
				<a
					use:scramble
					class="surface block px-4 py-4 text-sm uppercase tracking-[0.22em] transition hover:bg-[var(--accent)] hover:text-black"
					href={row.href}
					target={row.href.startsWith('mailto:') ? undefined : '_blank'}
					rel={row.href.startsWith('mailto:') ? undefined : 'noreferrer'}
				>
					{row.label}
				</a>
			{/each}
		</div>
	</div>
</section>
