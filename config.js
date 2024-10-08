// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Дмитрий',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Доброе утро,',
	greetingAfternoon: 'Добрый день,',
	greetingEvening: 'Добрый вечер,',
	greetingNight: 'Доброй ночи,',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ac07988c51ca4cf112b2482147e18399', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'ru', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '59.9',
	defaultLongitude: '30',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Google Brain',
			icon: 'brain',
			link: 'https://aistudio.google.com/app',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.yandex.ru/',
		},
		{
			id: '3',
			name: 'VK',
			icon: 'instagram',
			link: 'https://vk.com',
		},
		{
			id: '4',
			name: 'Docs',
			icon: 'file',
			link: 'https://docs.google.com/document/u/0/',
		},
		{
			id: '5',
			name: 'Telegram',
			icon: 'send',
			link: 'https://web.telegram.org/k/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://music.yandex.ru/home',
		},
		{
			id: '2',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/wacker331/',
		},
		{
			id: '3',
			name: 'GPT',
			icon: 'brain-circuit',
			link: 'https://chatgpt.com/',
		},
		{
			id: '4',
			name: 'Google Drive',
			icon: 'hard-drive',
			link: 'https://drive.google.com/drive/my-drive',
		},
		{
			id: '5',
			name: 'KinoPoisk',
			icon: 'popcorn',
			link: 'https://hd.kinopoisk.ru/',
		},
		{
			id: '6',
			name: 'Love',
			icon: 'heart',
			link: '',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase',
			id: '1',
			links: [
				{
					name: 'First Step',
					link: 'https://stepik.org/course/67/promo?search=1599287167#toc',
				},
				{
					name: 'Second Step',
					link: 'https://stepik.org/course/512/promo',
				},
				{
					name: 'Third Step',
					link: 'https://stepik.org/course/122813/promo',
				},
				{
					name: 'Final Boss',
					link: 'https://leetcode.com/problemset/all/',
				},
			],
		},
		{
			icon: 'hard-drive',
			id: '2',
			links: [
				{
					name: 'Mine',
					link: 'https://drive.google.com/drive/my-drive',
				},
				{
					name: '1',
					link: 'https://drive.google.com/drive/folders/12rOBpiM9n0VHnR5gN5VkzHjnQEoZEDLL',
				},
				{
					name: '2',
					link: 'https://drive.google.com/drive/folders/1JUDFP93ows1TnEhB3OEUAHpXPGsMlPcl',
				},
				{
					name: 'Chat',
					link: 'https://chatgpt.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
