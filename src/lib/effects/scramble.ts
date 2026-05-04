const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type ScrambleOptions = {
	duration?: number;
};

export function scramble(node: HTMLElement, options: ScrambleOptions = {}) {
	const source = (node.textContent ?? '').trim();
	const duration = options.duration ?? 320;
	let frame = 0;
	let raf = 0;
	const totalFrames = Math.max(8, Math.floor(duration / 16));

	function render() {
		const progress = frame / totalFrames;
		const revealCount = Math.floor(source.length * progress);

		const scrambled = source
			.split('')
			.map((char, index) => {
				if (char === ' ') return ' ';
				if (index < revealCount) return source[index];
				return CHARS[Math.floor(Math.random() * CHARS.length)];
			})
			.join('');

		node.textContent = scrambled;
		frame += 1;

		if (frame <= totalFrames) {
			raf = requestAnimationFrame(render);
		} else {
			node.textContent = source;
		}
	}

	function start() {
		cancelAnimationFrame(raf);
		frame = 0;
		render();
	}

	node.addEventListener('mouseenter', start);
	node.addEventListener('focus', start);

	return {
		destroy() {
			cancelAnimationFrame(raf);
			node.textContent = source;
			node.removeEventListener('mouseenter', start);
			node.removeEventListener('focus', start);
		}
	};
}
