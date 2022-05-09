// [IMPORT] //
import Vue from 'vue'
import Router from 'vue-router'


// [IMPORT] Personal (Ordered by path) //
import companyInfo from '@/defaults/companyInfo'
// Index //
import index from '@/pages'
// About //
import about from '@/pages/about'
// Admin //
import admin from '@/pages/admin'
// Admin Inventory //
import admin_inventory from '@/pages/admin/inventory'
import admin_login from '@/pages/admin/login'
import admin_profile from '@/pages/admin/profile'
import admin_register from '@/pages/admin/register'
// admin shopify //
import admin_shopify from '@/pages/admin/shopify'
import admin_shopify_collectionGroup from '@/pages/admin/shopify/collection-group'
import admin_shopify_collectionGroup_genre from '@/pages/admin/shopify/collection-group/genre'
import admin_shopify_collectionGroup_artist from '@/pages/admin/shopify/collection-group/artist'
import admin_shopify_product_analyze from '@/pages/admin/shopify/product/analyze'
import admin_shopify_product_manage from '@/pages/admin/shopify/product/manage'
import admin_shopify_smartCollection from '@/pages/admin/shopify/smart-collection'
// checkout //
import checkout from '@/pages/checkout'
// Contact
import contact from '@/pages/contact'
// Directions //
import directions from '@/pages/directions'
// discogsOrders //
import discogsOrders from '@/pages/discogs-orders'
// Email //
import emailSent from '@/pages/email-sent'
// Gallery //
import gallery from '@/pages/gallery'
// Menu //
import menu from '@/pages/menu'
// Privacy Policy //
import privacyPolicy from '@/pages/privacy-policy'
// Services //
import services from '@/pages/services'
// Screener //
import screener from '@/pages/screener'
// Trade //
import trade from '@/pages/trade'
// Vinyl Records //
import vinylRecords from '@/pages/vinyl-records'
// Not-Found //
import NotFound from '@/pages/404'


// [USE] //
Vue.use(Router)


const router = new Router ({
	mode: 'history',

	routes: [
		// root //
		{
			path: '/',
			name: '/',
			component: index,
			meta: {
				auth: true,
				title: 'Home'
			}
		},
		// About //
		{
			path: '/about',
			name: 'about',
			component: about,
			meta: {
				auth: true,
				title: 'About Us'
			}
		},
		// Admin //
		{
			path: '/admin',
			name: 'admin',
			component: admin,
			meta: {
				auth: true,
				title: 'Admin'
			}
		},
		// Admin Inventory //
		{
			path: '/admin/inventory',
			name: 'admin_inventory',
			component: admin_inventory,
			meta: {
				auth: true,
				title: ''
			},
		},
		{
			path: '/admin/login',
			name: 'admin_login',
			component: admin_login,
			meta: {
				auth: true,
				title: 'Admin Login'
			}
		},
		{
			path: '/admin/profile',
			name: 'admin_profile',
			component: admin_profile,
			meta: {
				auth: true,
				title: 'Admin Profile'
			}
		},
		{
			path: '/admin/register',
			name: 'admin_register',
			component: admin_register,
			meta: {
				auth: true,
				title: 'Admin Register'
			}
		},
		// admin shopify //
		{
			path: '/admin/shopify',
			name: 'admin_shopify',
			component: admin_shopify,
			meta: {
				auth: true,
				title: 'Your Shopify'
			}
		},
		{
			path: '/admin/shopify/collection-group',
			name: 'admin_shopify_collectionGroup',
			component: admin_shopify_collectionGroup,
			meta: {
				auth: true,
				title: ''
			}
		},
		{
			path: '/admin/shopify/collection-group/artist',
			name: 'admin_shopify_collectionGroup_artist',
			component: admin_shopify_collectionGroup_artist,
			meta: {
				auth: true,
				title: ''
			}
		},
		{
			path: '/admin/shopify/collection-group/genre',
			name: 'admin_shopify_collectionGroup_genre',
			component: admin_shopify_collectionGroup_genre,
			meta: {
				auth: true,
				title: ''
			}
		},
		{
			path: '/admin/shopify/product/analyze',
			name: 'admin_shopify_product_analyze',
			component: admin_shopify_product_analyze,
			meta: {
				auth: true,
				title: ''
			}
		},
		{
			path: '/admin/shopify/product/manage',
			name: 'admin_shopify_product_manage',
			component: admin_shopify_product_manage,
			meta: {
				auth: true,
				title: ''
			}
		},
		
		{
			path: '/admin/shopify/smart-collection/:limit/:page',
			name: 'admin_shopify_smartCollection',
			component: admin_shopify_smartCollection,
			meta: {
				auth: true,
				title: ''
			}
		},
		// Checkout //
		{
			path: '/checkout/:listing_id',
			name: 'Checkout',
			component: checkout,
			meta: {
				auth: true,
				title: `Checkout`
			}
		},
		// Contact //
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			meta: {
				auth: true,
				title: 'Contact Us'
			}
		},
		// Directions //
		{
			path: '/directions',
			name: 'directions',
			component: directions,
			meta: {
				auth: true,
				title: 'Find Us!'
			}
		},
		// discogs orders //
		{
			path: '/discogs-orders',
			name: 'discogsOrders',
			component: discogsOrders,
			meta: {
				auth: true,
				title: 'Orders'
			}
		},
		// Email //
		{
			path: '/email-sent',
			name: 'email-sent',
			component: emailSent,
			meta: {
				auth: true,
				title: 'Email Sent'
			},
		},
		// Gallery //
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
			meta: {
				auth: true,
				title: 'Gallery'
			},
		},
		// Menu //
		{
			path: '/menu',
			name: 'menu',
			component: menu,
			meta: {
				auth: true,
				title: 'Menu'
			}
		},
		// Privacy Policy //
		{
			path: '/privacy-policy',
			name: 'privacy-policy',
			component: privacyPolicy,
			meta: {
				auth: true,
				title: 'Privacy Policy'
			}
		},
		// Screener //
		{
			path: '/screener/:tab',
			name: 'screener',
			component: screener,
			meta: {
				auth: true,
				title: 'Screener'
			},
		},
		// Services //
		{
			path: '/services',
			name: 'services',
			component: services,
			meta: {
				auth: true,
				title: 'Services'
			}
		},
		// Trade //
		{
			path: '/trade',
			name: 'trade',
			component: trade,
			meta: {
				auth: true,
				title: 'Trade'
			}
		},
		// Vinyl Records //
		{
			path: '/vinyl-records',
			name: 'vinyl-records',
			component: vinylRecords,
			meta: {
				auth: true,
				title: 'Vinyl Records'
			}
		},
		// Not-Found //
		{
			path: '/**',
			name: 'not_found',
			component: NotFound,
			meta: {
				auth: true,
				title: '404 Not Found..'
			},
		},
	],
	
	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})


// [VUE-ROUTER-SET-TITLE] //
router.beforeEach((to, from, next) => {
	document.title = to.meta.title + ' - ' + companyInfo.companyName
	next()
})


export default router