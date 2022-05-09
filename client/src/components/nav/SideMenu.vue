<template>
	<div>
		<nav
			class="bg-light shadow nav-drawer-menu"
			:class="{ 'is-open': $store.state.showMenu, }"
		>
			<!-- Close Button -->
			<BButton
				variant="primary"
				class="w-100 py-3 text-light rounded-0"
				style="height: 133px;"
				@click="$store.state.showMenu = !$store.state.showMenu"
			><XIcon size="34" class="m-0 p-0" /></BButton>
			
			<a
				v-show="$store.state.showMenu" 
				:href="companyInfo.discogsLink"
				target="blank"
			>
				<div class="px-2 px-sm-4 px-md-5">
					<BButton
						v-show="$store.state.showMenu"
						variant="primary"
						class="w-100 my-3 py-4 shadow button"
						style=""
					>
						<span class="m-0 d-inline h3 font-weight-bold">
							Our Discogs
						</span>

						<img
							:src="require('../../assets/vinyl.png')"
							class="d-inline w-100 mx-2 my-3 my-sm-0 rotate"
							style="max-width: 50px;"
						>
					</BButton>
				</div>
			</a>

			<!-- Menu Page Link -->
			<RouterLink
				v-show="$store.state.showMenu"
				v-for="(button, i) in buttons"
				:key="i"
				:to="button.path"
			>
				<!-- Menu Items -->
				<BButton
					variant="none"
					class="w-100 text-primary button"
					@click="$store.state.showMenu = !$store.state.showMenu"
				>
					<p v-if="button.text" class="h1 my-1">{{ button.text }}</p>
					<span v-else v-html="button.sideMenuIcon"></span>
				</BButton>
			</RouterLink>

			<!-- Address -->
			<a
				v-show="$store.state.showMenu"
				:href="companyInfo.googleMapsLink"
				class="text-center"
			>
				<h4
					class="m-4 text-dark"
				>{{ companyInfo.address }}</h4>
			</a>

			<!-- Social Media -->
			<SocialMediaPlug
				v-show="$store.state.showMenu"
				size="2x"
				variant="primary"
				class="m-4"
			/>
			<br><br><br><br><br>
		</nav>

		<div class="hidden-right-side bg-dark"
			:class="{
				'd-block': $store.state.showMenu,
				'd-none': !$store.state.showMenu
			}"
			style="opacity: .5;"
			@click="$store.state.showMenu = !$store.state.showMenu"
		></div>
	</div>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'

	// [EXPORT] //
	export default {
		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
			}
		},

		components: {
			XIcon,
			SocialMediaPlug,
		},
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;
		max-width: 600px;

		overflow-x: hidden;

		transition: 0.72s;
	}

	.nav-drawer-menu .button {
		font-size: 2em;

		&:hover { background: hsla(0, 0%, 0%, 0.50); }
	}
	
	.is-open { width: 75%; }

	.hidden-right-side {
		z-index: 1999;

		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
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