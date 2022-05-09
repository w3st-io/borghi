<template>
	<div class="w-100 fixed-top">
		<!-- Desktop Menu -->
		<div
			class="d-none d-xl-flex w-100 transition"
			:class="[navClass, { 'bg-light': !$store.state.isHomePage }]"
		>
			<div class="w-100 mx-auto px-5 py-3" style="">
				<RouterLink to="/">
					<h1 class="m-0 text-center text-spread-lg">BORGHI FINE ART</h1>
				</RouterLink>
			</div>
		</div>

		<!-- Mobile Menu -->
		<div
			class="d-flex d-xl-none m-0 p-0 text-right bg-shade-darker transition"
			:class="[navClass, { 'bg-dark': !$store.state.isHomePage }]"
		>
			<div class="text-center w-100 px-3 py-3" style="max-width: 130px;">
				<RouterLink to="/">
				<img
					:src="require('../../assets/images/company/dinos-dark.png')"
					class="w-100"
				>
				</RouterLink>
			</div>

			<div class="ml-auto">
				<!-- [HIDDEN] Google Maps Icon -->
				<a :href="companyInfo.googleMapsLink" target="_blank">
				<BButton
					variant="primary"
					class="ml-auto h-100 px-3 text-light"
				><MapPinIcon size="2x" /></BButton>
				</a>

				<!-- [HIDDEN] Menu Button -->
				<BButton
					variant="none"
					class="px-4 px-sm-5 text-light"
					@click="toggle()"
				><MenuIcon size="3x" /></BButton>
			</div>
		</div>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon, MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			MenuIcon,
			MapPinIcon,
			SideMenu,
		},

		data() {
			return {
				titleClass: '',
				navClass: '',
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-grey'
					this.titleClass = 'text-white'
				}
				else {
					this.navClass = ''
					this.titleClass = ''
				}
			},
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.transition {
		transition: .5s;
	}

	.nav {
		z-index: 100;
	}

	.menu-link {
		text-shadow: 1px 1px red;

		:hover {
			@extend .text-primary;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .text-primary;

			box-shadow: 0 !important;
		}
	}

	.bg-grey {
		background-color: grey !important;
	}
</style>