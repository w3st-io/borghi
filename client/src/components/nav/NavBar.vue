<template>
	<div class="w-100 fixed-top">
		<!-- Desktop Menu -->
		<div
			class="mobile-nav py-4 transition text-center"
			:class="[navClass]"
		>
			<h4 class="logo m-0 text-spread">BORGHI FINE ART</h4>
			<h6 class="m-0">{{ companyInfo.companyCaption1 }}</h6>
		</div>

		<!-- Mobile Menu -->
		<div class="mobile-nav-right py-4">
			<BButton variant="dark" class="mr-3" @click="toggle()">
				<MenuIcon />
			</BButton>
		</div>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			MenuIcon,
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
					this.navClass = 'bg-glass text-light'
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

	.mobile-nav {
		z-index: 100;
		position: fixed; /* or absolute */
		top: 0;
		left: 0;
		width: 100%;
	}

	.bg-glass {
		background-color: rgba(0, 0, 0, 20%) !important;
		backdrop-filter: blur(10px)!important;
	}

	.logo {
		font-weight: bold;
	}

	.mobile-nav-right {
		z-index: 100;
		position: fixed; /* or absolute */
		top: 0;
		right: 0;
	}
</style>