<template>
	<BRow class="m-0 p-0">
		<BCol
			cols="12"
			class="m-0 p-0 py-3 bg-primary border-bottom border-light"
			:class="{
				'bg-white border-0': $store.state.isHomePage,
				'bg-dotted': !$store.state.isHomePage,
			}"
			style="border-width: 3px !important;"
		>
			<BContainer class="d-flex container-fluid" style="height: 100px;">
				<!-- [LEFT] Menu -->
				<div class="d-flex justify-content-center" style="flex: 1;">
					<RouterLink
						v-if="!$store.state.isHomePage"
						to="/"
						class="d-none d-md-block mr-auto"
					>
						<div class="text-center logo-img">
							<img
								:src="companyInfo.logoSm"
								class="w-100 rounded-circle"
								style="
									max-width: 100px;
								"
							>
						</div>
					</RouterLink>

					<BButton
						:variant="MenuIconVariant()"
						class="d-block d-md-none mr-auto rounded-0"
						:class="{ 'bg-white text-primary': $store.state.isHomePage }"
						@click="$store.state.showMenu = !$store.state.showMenu"
					><MenuIcon size="3x" /></BButton>
				</div>

				<!-- [CENTER] Menu -->
				<div
					class="
						d-none
						d-md-flex
						justify-content-center
						py-2
					"
					style="flex: 3;"
				>
					<div class="d-none d-md-block w-100 py-4">
						<div class="mx-auto">
							<ul class="list-unstyled text-center">
								<li
									v-for="(button, i) in buttons"
									:key="i"
									class="d-inline text-light"
								>
									<!-- Menu Page Link -->
									<RouterLink
										:to="button.path"
										class="text-decoration-none text-light"
									>
										<span
											:variant="'none'"
											class="mr-2 mr-lg-3 p-0 px-1 border-0 menu-link"
											:class="{
												'bg-white text-primary': $store.state.isHomePage,
												'bg-primary text-light': !$store.state.isHomePage,
											}"
										>
											<span v-if="button.text" class="m-0">{{ button.text }}</span>
											<span v-else v-html="button.navIcon"></span>
										</span>
									</RouterLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- [RIGHT] -->
				<div
					class="
						d-flex
						ml-auto
						py-0
						text-right
						justify-content-center
					"
					style="flex: 1;"
				>
					<!-- NOT HOME DEFAULT -->
					<div
						v-if="!$store.state.isHomePage"
						class="d-none d-md-block ml-auto py-4 text-center"
					>
						<!-- Social Media -->
						<SocialMediaPlug
							size="2.1x"
							variant="light"
							class="w-100 mt-1 mr-2 bg-primary"
							textAlign="right"
						/>
					</div>
					
					<!-- [HIDDEN] JJ Logo -->
					<RouterLink
						v-if="!$store.state.isHomePage"
						to="/"
						class="d-block d-md-none ml-auto"
					>
						<div class="logo-img">
							<img
								:src="companyInfo.logoSm"
								class="w-100 rounded-circle"
								style="max-width: 100px;"
							>
						</div>
					</RouterLink>
				</div>
			</BContainer>
		</BCol>

		<!-- Side Menu -->
		<SideMenu />
	</BRow>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import SocialMediaPlug from '@/components/nav/NavbarSocialMediaPlug'

	export default {
		components: {
			MenuIcon,
			SideMenu,
			SocialMediaPlug,
		},

		data() {
			return {
				localStorage: localStorage,
				buttons: buttons,
				companyInfo: companyInfo,

				// [MENU] //
				sideMenuOpen: false,

				notHomeGIF: 'https://images2.imgbox.com/d3/52/vyUnuXH4_o.gif',
			}
		},

		methods: {
			MenuIconVariant() {
				if (this.$store.state.isHomePage) { return 'light' }
				else { return 'primary' }
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.bg-tranparent {
		background-color: rgba(0, 0, 0, 0) !important;
	}

	.nav-section-box {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.logo-img {
		transition: .36s;
		&:hover {
			transform: translate(0px, -3px);
		}

		img {
			background: rgb(0,0,0);
			background: radial-gradient(
				circle,
				rgba(0,0,0,0) 0%,
				rgba(255,255,255,1) 0%,
				rgba(0,0,0,0) 100%
			);
		}
	}

	.router-link-exact-active {
		.menu-link::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}

	.menu-link {
		position: relative;
		text-decoration: none;
		transition: .2s;
		text-decoration: none !important;

		&::before {
			@extend .bg-light;

			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: -5px;
			left: 0;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out 0s;
		}

		&:hover::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}

	.m:hover {
		.ml {
			background-color: rgb(255, 255, 255);
		}
	}

	.ml {
		width: 35px;
		height: 5px;
		background-color: rgb(255, 255, 255);
		margin: 6px auto;
	}

	.rotate {
		-webkit-animation:spin 4s linear infinite;
		-moz-animation:spin 4s linear infinite;
		animation:spin 4s linear infinite;
	}
	@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
	@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
	@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>