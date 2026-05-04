type RevealOptions = {
	threshold?: number;
	rootMargin?: string;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: options.threshold ?? 0.2,
			rootMargin: options.rootMargin ?? '0px 0px -10% 0px'
		}
	);

	node.classList.add('reveal');
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
