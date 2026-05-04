export type Release = {
	slug: string;
	title: string;
	year: number;
	label?: string;
	cover: string;
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
		year: 2026,
		label: 'HZ Records',
		cover: '/covers/submerge.png',
		bandcampEmbed: {
			type: 'track',
			id: '3888979292'
		},
		links: {
			bandcamp: 'https://hzrecords.bandcamp.com/track/submerge'
		}
	},
	{
		slug: 'mind-warp',
		title: 'Mind Warp',
		year: 2024,
		label: 'Scuffed Recordings',
		cover: '/covers/mind-warp.png',
		bandcampEmbed: {
			type: 'album',
			id: '530018572'
		},
		links: {
			bandcamp: 'https://indent-uk.bandcamp.com/album/mind-warp',
			spotify:
				'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	},
	{
		slug: 'phantom-pressure-ep',
		title: 'Phantom Pressure EP',
		year: 2024,
		label: 'MELD',
		cover: '/covers/phantom-pressure.png',
		bandcampEmbed: {
			type: 'album',
			id: '4276085402'
		},
		links: {
			bandcamp: 'https://indent-uk.bandcamp.com/album/phantom-pressure',
			spotify:
				'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	},
	{
		slug: 'transitory-memories-ep',
		title: 'Transitory Memories EP',
		year: 2021,
		label: 'Noire State',
		cover: '/covers/transitory-memories.png',
		bandcampEmbed: {
			type: 'album',
			id: '3507787993'
		},
		links: {
			bandcamp: 'https://noirestate.bandcamp.com/album/indent-transitory-memories-ns002',
			spotify:
				'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	},
	{
		slug: 'falling',
		title: 'Falling',
		year: 2021,
		label: 'Holding Hands',
		cover: '/covers/falling.png',
		bandcampEmbed: {
			type: 'album',
			id: '911972361'
		},
		links: {
			bandcamp: 'https://holdinghandsrecords.bandcamp.com/album/falling-desert-sound-colony-remix',
			spotify:
				'https://open.spotify.com/artist/6WqrQFXkGLRuZeruk0ka2Z?si=O8aC3QsWRtmx2fbrjKLvCg'
		}
	}
];
