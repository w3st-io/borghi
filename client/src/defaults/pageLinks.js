// [REQUIRE] //
const feather = require('feather-icons')


// [INIT] const //
const navIconConfig = {
	'stroke-width': 2,
	width: 18,
	height: 18,
	'class': 'pb-1'
}
const sideMenuIconConfig = {
	'stroke-width': 2.4,
	width: 34,
	height: 34,
	'class': 'my-2'
}


module.exports = [
	{
		path: '/',
		text: '',
		navIcon: feather.icons.home.toSvg(navIconConfig),
		sideMenuIcon: feather.icons.home.toSvg(sideMenuIconConfig),
	},
	{
		path: '/contact',
		text: 'Contact',
	},
	{
		path: '/trade',
		text: 'Trade',
	},
	{
		path: '/services',
		text: 'Services',
	},
	{
		path: '/about',
		text: 'About',
	},
	{
		path: '/gallery',
		text: 'Gallery',
	},
	/*
	{
		path: '/shop',
		text: 'Shop',
	},
	*/
]