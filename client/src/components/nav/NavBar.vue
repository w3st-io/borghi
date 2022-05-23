<template>
	<div>
		<!-- Left -->
		<div class="mobile-nav-left transition py-4">
			<RouterLink to="/" class="ml-3">
				<img
					:src="logo.light"
					class="transition"
					style="max-width: 35px;"
				>
			</RouterLink>
		</div>

		<!-- Center -->
		<div
			class="mobile-nav transition py-4 text-center backlight"
			:class="[navClass]"
		>
			<RouterLink to="/" class="text-decoration-none">
				<h4 class="logo m-0 mt-1 font-weight-bold text-spread text-light">
					BORGHI FINE ART
				</h4>
				<h6 class="m-0 font-weight-bold text-spread-sm small text-tertiary">
					{{ companyInfo.companyCaption1 }}
				</h6>
			</RouterLink>
		</div>

		<!-- Right -->
		<div class="mobile-nav-right py-4">
			<div class="mr-3">
				<BButton variant="outline-light" class="border-0" @click="toggle()">
					<MenuIcon size="2x" />
				</BButton>
			</div>
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

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				companyInfo: companyInfo,

				logo: {
					dark: require('../../assets/logo.png'),
					light: require('../../assets/logo-light.png'),
				},

				showDarkLogoImg: true,
				navClass: 'bg-glass text-light',
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-glass text-light'
					this.showDarkLogoImg = true
				}
				else {
					this.navClass = 'bg-glass text-light'
					this.showDarkLogoImg = false
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

	.mobile-nav-left {
		z-index: 101;
		position: fixed; /* or absolute */
		top: 0;
		left: 0;
	}

	.mobile-nav {
		z-index: 100;
		position: fixed; /* or absolute */
		top: 0;
		left: 0;
		width: 100%;
		height: 6rem;
	}

	.mobile-nav-right {
		z-index: 101;
		position: fixed; /* or absolute */
		top: 0;
		right: 0;
	}

	.bg-glass {
		background-color: rgba(0, 0, 0, 20%) !important;
		backdrop-filter: blur(10px)!important;
	}

	.text-shadow {
		text-shadow: .5px 0px #000000;
	}
</style>