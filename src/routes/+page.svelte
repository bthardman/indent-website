<script lang="ts">
	import { onMount } from 'svelte';
	import { releases } from '$lib/releases';

	let activeIndex = $state(0);
	let itemRefs: Array<HTMLElement | null> = [];
	let blendFrom = $state(0);
	let blendTo = $state(0);
	let blendAmount = $state(0);
	let activePlayerIndex = $state(0);
	let socialLinks = [
		{ label: 'Instagram', href: 'https://www.instagram.com/_indent' },
		{ label: 'SoundCloud', href: 'https://soundcloud.com/indent_uk' },
		{ label: 'Bandcamp', href: 'https://indent-uk.bandcamp.com/music' },
		{
			label: 'Spotify',
			href: 'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	];

	function embedUrl(index: number) {
		const item = releases[index];
		return `https://bandcamp.com/EmbeddedPlayer/${item.bandcampEmbed.type}=${item.bandcampEmbed.id}/size=large/bgcol=0a0a0a/linkcol=c6ff00/artwork=small/transparent=true/`;
	}

	function setActivePlayer(index: number) {
		activePlayerIndex = index;
	}

	function clamp(value: number, min: number, max: number) {
		return Math.min(max, Math.max(min, value));
	}

	function updateScrollState() {
		const nodes = itemRefs.filter((node): node is HTMLElement => Boolean(node));
		if (nodes.length === 0) return;
		if (nodes.length === 1) {
			activeIndex = 0;
			blendFrom = 0;
			blendTo = 0;
			blendAmount = 0;
			return;
		}

		const centers = nodes.map((node) => {
			const rect = node.getBoundingClientRect();
			return window.scrollY + rect.top + rect.height / 2;
		});
		const anchor = window.scrollY + window.innerHeight * 0.5;

		if (anchor <= centers[0]) {
			activeIndex = 0;
			blendFrom = 0;
			blendTo = 0;
			blendAmount = 0;
			return;
		}

		const last = centers.length - 1;
		if (anchor >= centers[last]) {
			activeIndex = last;
			blendFrom = last;
			blendTo = last;
			blendAmount = 0;
			return;
		}

		for (let i = 0; i < centers.length - 1; i += 1) {
			const start = centers[i];
			const end = centers[i + 1];
			if (anchor >= start && anchor <= end) {
				const progress = clamp((anchor - start) / (end - start), 0, 1);
				blendFrom = i;
				blendTo = i + 1;
				blendAmount = progress;
				activeIndex = progress < 0.5 ? i : i + 1;
				return;
			}
		}
	}

	onMount(() => {
		let ticking = false;
		const onScrollOrResize = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(() => {
				updateScrollState();
				ticking = false;
			});
		};

		updateScrollState();
		window.addEventListener('scroll', onScrollOrResize, { passive: true });
		window.addEventListener('resize', onScrollOrResize);

		return () => {
			window.removeEventListener('scroll', onScrollOrResize);
			window.removeEventListener('resize', onScrollOrResize);
		};
	});
</script>

<div id="top" class="relative isolate min-h-screen text-[var(--fg)]">
	<div class="pointer-events-none fixed inset-0 -z-10">
		<div
			class="absolute inset-0"
			style={`background: ${releases[blendFrom].gradient}; opacity: ${1 - blendAmount};`}
		></div>
		<div
			class="absolute inset-0"
			style={`background: ${releases[blendTo].gradient}; opacity: ${blendAmount};`}
		></div>
	</div>

	<section class="px-6 pt-12 pb-10 md:px-10 md:pt-16">
		<div class="mx-auto max-w-4xl">
			<img src="/indent-logo.png" alt="Indent logo" class="mx-auto w-full max-w-[820px]" />
			<div class="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
				{#each socialLinks as link}
					<a
						class="surface px-4 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
						href={link.href}
						target="_blank"
						rel="noreferrer"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section class="px-6 pt-10 pb-44 md:px-10 md:pt-16 md:pb-50">
		<div class="mx-auto mb-14 max-w-6xl text-center md:mb-20">
			<h2 class="text-3xl font-bold uppercase tracking-[0.22em] md:text-4xl">Releases</h2>
		</div>
		<div class="mx-auto flex max-w-6xl flex-col gap-36 md:gap-48">
			{#each releases as release, index (release.slug)}
				<article
					bind:this={itemRefs[index]}
					data-index={index}
					class={`surface w-full p-4 transition-all duration-500 md:w-[78%] md:p-5 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}
				>
					<div class="grid items-start gap-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-7">
						<img
							src={release.cover}
							alt={`${release.title} artwork`}
							class="aspect-square w-full border border-[var(--border-strong)] object-cover"
							loading="lazy"
						/>
						<div class="surface p-4 lg:mt-2">
							<p class="text-xs uppercase tracking-[0.18em] text-[var(--fg)]">
								{release.label} // {release.releaseDate}{release.catalogNo
									? ` // ${release.catalogNo}`
									: ''}
							</p>
							<h2 class="mt-3 text-2xl font-bold uppercase tracking-[0.08em] md:text-3xl">
								{release.title}
							</h2>
							<div class="mt-4 flex flex-wrap gap-2">
								<a
									class="surface px-3 py-2 text-xs uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
									href={release.links.bandcamp}
									target="_blank"
									rel="noreferrer"
								>
									Bandcamp
								</a>
								{#if release.links.spotify}
									<a
										class="surface px-3 py-2 text-xs uppercase tracking-[0.14em] transition hover:bg-white hover:text-black"
										href={release.links.spotify}
										target="_blank"
										rel="noreferrer"
									>
										Spotify
									</a>
								{/if}
							</div>

							<div class="mt-5 border-t border-[var(--border-strong)] pt-5">
								{#if activePlayerIndex === index}
									<iframe
										title={`${release.title} Bandcamp player`}
										class="h-[120px] w-full border-0"
										src={embedUrl(index)}
										loading="lazy"
										seamless
									>
									</iframe>
								{:else}
									<div class="h-[120px] border border-[var(--border-strong)]">
										<button
											type="button"
											class="flex h-full w-full items-center justify-center gap-3 bg-white/5 text-[var(--fg)] transition hover:bg-white/15"
											onclick={() => setActivePlayer(index)}
										>
											<span class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--fg)]">
												▶
											</span>
											<span class="text-xs uppercase tracking-[0.18em]">Listen</span>
										</button>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>
