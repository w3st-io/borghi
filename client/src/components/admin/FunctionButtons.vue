<template>
	<div>
		<BRow>
			<BCol class="">
				<BButton
					variant="warning"
					class="w-100 mb-2"
					size="sm"
					pill
					@click="redirectDashboard()"
				>Dashboard</BButton>
			</BCol>
		</BRow>

		<BRow>
			<BCol sm="6" md="3" class="">
				<RouterLink
					to="/discogs-orders"
				>
					<BButton
						variant="primary"
						size="sm"
						class="w-100 mb-2"
						pill
					>Discogs Orders</BButton>
				</RouterLink>
			</BCol>

			<BCol sm="6" md="3" class="">
				<RouterLink
					to="/inventory"
				>
					<BButton
						variant="primary"
						size="sm"
						class="w-100 mb-2"
						pill
					>Inventory</BButton>
				</RouterLink>
			</BCol>

			<BCol sm="6" md="3" class="">
				<RouterLink to="/admin/shopify">
					<BButton
						variant="primary"
						size="sm"
						class="w-100 mb-2"
						pill
					>Shopify</BButton>
				</RouterLink>
			</BCol>

			<BCol sm="6" md="3" class="">
				<RouterLink to="/admin/inventory/analytics">
					<BButton
						variant="primary"
						size="sm"
						class="w-100 mb-2"
						pill
					>Inventory Analyzer</BButton>
				</RouterLink>
			</BCol>
		</BRow>
	</div>
</template>

<script>
	import router from '@/router'

	export default {
		methods: {
			redirectDashboard() {
				router.push({ name: 'admin' }) 
			},
		},
	}
</script>