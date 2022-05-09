<template>
	<div
		id="app"
		:key="appKey"
		:class="{ 'aw-background': $store.state.nodeENV == 'production' }"
	>
		<!-- Top Navbar & Side Menu -->
		<NavBar
			v-if="$store.state.showNavBar"
			class="position-fixed w-100 nav-z-index"
		/>

		<div
			v-if="$store.state.showNavBar && !$store.state.isHomePage"
			class="bg-secondary nav-spacer2"
		></div>

		<!-- Router -->
		<RouterView :key="$route.name + ($route.params.id || '')" />

		<!-- Bottom Footer -->
		<Footer v-if="$store.state.showFooter" />

		<!-- Admin Bottom Bar -->
		<AdminNavBar v-if="$store.state.admin.logged" />

		<!-- Floating Pop Up Banner -->
		<PopUpBanner
			v-if="message"
			:message="message"
			BGColor="info"
		/>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import AdminNavBar from '@/components/admin/AdminNavBar'
	import PopUpBanner from '@/components/inform/PopUpBanner'
	import NavBar from '@/components/nav/NavBar'
	import Footer from '@/components/nav/Footer'
	import { EventBus } from '@/main'
	import Service from '@/services'
	import AdminService from '@/services/admin/AdminService'

	export default {
		name: 'App',

		data() {
			return {
				message: '',
				appKey: 0,
				reqData: {},
			}
		},

		components: {
			AdminNavBar,
			PopUpBanner,
			NavBar,
			Footer,
		},

		methods: {
			forceRerender() { this.appKey++ },

			async setNodeEnv() {
				try {
					this.reqData = await Service.index()

					if (this.reqData.status) {
						// [LOCAL-STORAGE] //
						localStorage.setItem('node_env', this.reqData.node_env)

						// [STORE] //
						this.$store.state.nodeENV = this.reqData.node_env
					}

					if (localStorage.admintoken) {
						this.$store.state.admin.logged = true
					}
				}
				catch (err) { console.log(`App: Error --> ${err}`) }
			},

			log() {
				console.log('%%% [APP] %%%')
				console.log('localStorage:', localStorage)
			}
		},

		async created() {
			this.forceRerender()

			await this.setNodeEnv()

			// [ADMIN] checkIn //
			await AdminService.s_checkIn()
			
			EventBus.$on('force-rerender', () => { this.forceRerender() })

			// [LOG] //
			this.log()
		},
	}
</script>

<style lang="scss">
	body {
		background-color: rgb(245, 245, 245) !important;
	}

	body.loading-no-scroll { overflow: hidden; }

	.nav-z-index {
		z-index: 2000;
		top: 0;
	}

	.nav-spacer2 {
		padding-top: 132px;	
	}
</style>