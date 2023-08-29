import { useEffect, useState } from 'react';

export function useMinWidth(width: number) {
	const [matched, setMatched] = useState(false);

	useEffect(() => {
		function matchMedia() {
			if (window.matchMedia(`(min-width:${width}px)`).matches) {
				setMatched(true);
			} else {
				setMatched(false);
			}
		}

		matchMedia();

		//debounce
		let timeout: string | number | NodeJS.Timeout | undefined;
		function handleResize() {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				matchMedia();
			}, 500);
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	return matched;
}
