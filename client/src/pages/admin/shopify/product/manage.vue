<template>
	<BContainer class="py-5">
		<BCard no-body>
			<BCardHeader class="bg-primary">
				<h3 class="m-0 text-light">Products Manage</h3>
			</BCardHeader>

			<BCardBody>
				<BButton
					@click="deleteAllItems()"
				>Delete All Items</BButton>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
import ShopifyProductService from '@/services/admin/shopify/ProductService'
export default {
	data() {
		return {
			areYouSure: false,
		}
	},

	methods: {
		async deleteAllItems() {
			if (this.areYouSure) {
				await ShopifyProductService.s_deleteAll()
			}
		},
	},
}
</script>