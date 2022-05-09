<template>
	<BContainer class="py-5">
		<BCard no-body>
			<BCardHeader class="bg-primary">
				<h3 class="m-0 text-light">Products Analytics</h3>
			</BCardHeader>

			<BCardBody v-if="!loading">
				<BRow>
					<BCol cols="12">
						Total Product: {{ allProducts.length }}
					</BCol>
						
					<BCol cols="12">
						{{ score["Rock"] }}
					</BCol>
				</BRow>
				
				<BRow v-for="(p, i) in allProducts" :key="i">
					<BCol cols="12">{{ p.tags}}</BCol>
				</BRow>
			</BCardBody>

			<BCardBody v-if="loading">
				<h1 class="text-warning">Loading..</h1>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
import PageService from '../../../../services/PageService'
export default {
	data() {
		return {
			allProducts: [],

			score: {},

			loading: true,
			resData: {},
		}
	},

	methods: {
		async getPageData() {
			this.loading = true

			this.resData = await PageService.s_admin_shopify_product_analyze()

			if (this.resData.status) {
				this.allProducts = this.resData.allProducts

				for (let i = 0; i < this.allProducts.length; i++) {
					this.allProducts[i].tags = this.allProducts[i].tags.split(', ')
					
					for (let ii = 0; ii < this.allProducts[i].tags.length; ii++) {
						console.log(this.allProducts[i].tags[ii])

						if (!this.score[this.allProducts[i].tags[ii]]) {
							this.score[this.allProducts[i].tags[ii]] = 1
						}
						else {
							this.score[this.allProducts[i].tags[ii]]++
						}
					}
				}
			}

			this.loading = false
		}
	},
	
	async created() {
		await this.getPageData()
	},
}
</script>