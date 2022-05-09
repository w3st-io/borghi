<template>
	<nav class="navbar navbar-dark fixed-bottom bg-warning">
		<BRow class="w-100">
			<BCol cols="2">
				<BButton
					size="sm"
					variant="primary"
					pill
					class="w-100"
					@click="redirectAdmin()"
				>Dashboard</BButton>
			</BCol>

			<BCol cols="2">
				<BButton
					size="sm"
					variant="light"
					pill
					class="w-100" 
					@click="redirectDiscogsOrders()"
				>Discogs Orders</BButton>
			</BCol>

			<BCol cols="2">
				<BButton
					size="sm"
					variant="light"
					pill 
					class="w-100"
					@click="redirectInventory()"
				>Inventory</BButton>
			</BCol>

			<BCol cols="2">
				<BButton
					size="sm"
					variant="light"
					pill 
					class="w-100"
					@click="redirectShopifyCollections()"
				>Shopify</BButton>
			</BCol>

			<BCol cols="2">

			</BCol>

			<BCol cols="2">
				<BButton
					variant="outline-primary"
					size="sm"
					class="w-100"
					pill
					@click="logout()"
				>Admin Logout</BButton>
			</BCol>
		</BRow>
	</nav>
</template>

<script>
	// [IMPORT] Personal //
	import router from '@/router'
	import AdminService from '@/services/admin/AdminService'

	// [EXPORT] //
	export default {
		methods: {
			logout() {
				AdminService.s_logout()
			},

			redirectDiscogsOrders() {
				router.push({ name: 'discogsOrders' })
			},

			redirectInventory() {
				router.push({ name: 'admin_inventory' })
			},

			redirectScreener() {
				router.push({
					name: 'screener',
					params: { tab: 0 }
				})
			},

			redirectShopifyCollections() {
				router.push('/admin/shopify')
			},

			redirectAdmin() { router.push({ name: 'admin' }) },

			redirectAdminProfile() { router.push({ name: 'admin_profile' }) },
		},
	}
</script>

<style lang="scss" scoped>
	.bg-navbar {
		background-color: rgba(214, 162, 18, 0.548) !important;
	}
</style>