<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/jetbrains-mono/700.css';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Indent — electronic artist website, releases and links." />
	<link rel="icon" href={favicon} />
	<title>Indent</title>
</svelte:head>

<div class="noise-overlay" aria-hidden="true"></div>
{@render children()}
