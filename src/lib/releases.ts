export type Release = {
	slug: string;
	title: string;
	releaseDate: string;
	label?: string;
	catalogNo?: string;
	cover: string;
	gradient: string;
	bandcampEmbed: {
		type: 'album' | 'track';
		id: string;
	};
	links: {
		bandcamp: string;
		spotify?: string;
		apple?: string;
		beatport?: string;
	};
};

export const releases: Release[] = [
	{
		slug: 'submerge',
		title: 'Submerge',
		releaseDate: '27 Mar 2026',
		label: 'HZ Records',
		catalogNo: 'HZVA004',
		cover: '/covers/submerge.png',
		gradient: 'radial-gradient(circle at 50% 12%, #06050d 0%, #181230 58%, #252042 100%)',
		bandcampEmbed: {
			type: 'track',
			id: '3888979292'
		},
		links: {
			bandcamp: 'https://hzrecords.bandcamp.com/track/submerge',
			spotify: 'https://open.spotify.com/album/2Ahocf788oeA08sYXmLzVl?si=k751eqooSCW-eJM7FUltMw'
		}
	},
	{
		slug: 'mind-warp',
		title: 'Mind Warp',
		releaseDate: '30 Aug 2024',
		label: 'Scuffed Recordings',
		catalogNo: 'SCUFBITS020',
		cover: '/covers/mind-warp.png',
		gradient: 'radial-gradient(circle at 40% 10%, #ffb832 0%, #d7881f 52%, #8a5410 100%)',
		bandcampEmbed: {
			type: 'album',
			id: '530018572'
		},
		links: {
			bandcamp: 'https://indent-uk.bandcamp.com/album/mind-warp',
			spotify: 'https://open.spotify.com/album/0UfrCIQFMsa6SdC7J3NXNW?si=RsRi6QDwRA2CpKo21wZahg'
		}
	},
	{
		slug: 'phantom-pressure-ep',
		title: 'Phantom Pressure EP',
		releaseDate: '15 Mar 2024',
		label: 'MELD',
		catalogNo: 'MELD010',
		cover: '/covers/phantom-pressure.png',
		gradient: 'radial-gradient(circle at 52% 0%, #227dff 0%, #2a66c5 50%, #234c90 100%)',
		bandcampEmbed: {
			type: 'album',
			id: '4276085402'
		},
		links: {
			bandcamp: 'https://indent-uk.bandcamp.com/album/phantom-pressure',
			spotify: 'https://open.spotify.com/album/50UvPZg8wZCydHJ1komOXI?si=-PmBDEf9S9y-xk2khR1xoQ'
		}
	},
	{
		slug: 'transitory-memories-ep',
		title: 'Transitory Memories EP',
		releaseDate: '04 Aug 2021',
		label: 'Noire State',
		catalogNo: 'NS002',
		cover: '/covers/transitory-memories.png',
		gradient: 'radial-gradient(circle at 50% 0%, #02a063 0%, #1c8c63 52%, #23674f 100%)',
		bandcampEmbed: {
			type: 'album',
			id: '3507787993'
		},
		links: {
			bandcamp: 'https://noirestate.bandcamp.com/album/indent-transitory-memories-ns002',
			spotify: 'https://open.spotify.com/album/3HOtqvxBuaYHzHQUATdiNm?si=lrC5Go2GQryDSN_CCJqVUQ'
		}
	},
	{
		slug: 'falling',
		title: 'Falling',
		releaseDate: '12 Feb 2021',
		label: 'Holding Hands',
		catalogNo: 'HHDIGI001',
		cover: '/covers/falling.png',
		gradient: 'radial-gradient(circle at 50% 15%, #511316 0%, #7a1d24 55%, #5d1720 100%)',
		bandcampEmbed: {
			type: 'album',
			id: '911972361'
		},
		links: {
			bandcamp: 'https://holdinghandsrecords.bandcamp.com/album/falling-desert-sound-colony-remix',
			spotify: 'https://open.spotify.com/album/4o51ncZiOo6XsBS0HLVRDU?si=zcYi1QaWTkWh7n99uHU5EQ'
		}
	}
];
