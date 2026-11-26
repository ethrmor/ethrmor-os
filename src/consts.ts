// Site-wide values. Edit these freely.

export const SITE_TITLE = '<ethrmor />';
export const SITE_DESCRIPTION =
	'Ethan Morris is a director of development, dad of two, and a winger who picked up hockey at 36.';

// The "Now" line on the home page. Update it whenever it stops being true.
export const NOW = {
	text: 'Writing new topics for the Financial Handbook, one plain-English page at a time.',
	updated: new Date('2026-11-25'),
};

// Hockey card on the About page.
export const PLAYER = {
	team: 'Bombers',
	number: 91,
	position: 'Winger',
	shoots: 'Right',
	started: 2026,
	favorite: 'Chicago Blackhawks',
	// This season's numbers. Fill these in and the stat line appears on the About page:
	// season: { label: '2026–27', gp: 12, g: 3, a: 5 },
	season: null as null | { label: string; gp: number; g: number; a: number },
};

// Next game, shown under the "Now" line on the home page. It hides itself once the
// game has started, so it never looks stale. Example:
// { date: '2026-12-03T21:15:00-06:00', opponent: 'Ice Dogs', rink: 'Owens Center' }
export const NEXT_GAME = null as null | { date: string; opponent: string; rink?: string };

// Time zone used to show the game time.
export const HOME_TIME_ZONE = 'America/Chicago';

export const SOCIAL = {
	github: 'https://github.com/ethrmor',
	linkedin: 'https://linkedin.com/in/ethanmorris1',
	x: 'https://twitter.com/ethrmor',
};
