<script lang="ts">
	type Props = {
		text: string;
		speedSeconds?: number;
	};

	let { text, speedSeconds = 22 }: Props = $props();
</script>

<div class="overflow-hidden whitespace-nowrap">
	<div
		class="inline-flex min-w-max gap-8 text-xs uppercase tracking-[0.24em] text-[var(--accent)]"
		style={`animation: marquee-scroll ${speedSeconds}s linear infinite;`}
	>
		<span>{text}</span>
		<span aria-hidden="true">{text}</span>
	</div>
</div>
