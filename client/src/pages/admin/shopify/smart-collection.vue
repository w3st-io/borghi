<template>
	<BContainer class="py-5">
		<h3 class="text-primary">Smart Collections</h3>
		<BTabs pills>
			<!-- Current Collections -->
			<BTab title="View All" active>
				<ViewAll
					:collectionCount="collectionCount"
					:maxPages="maxPages"
					:collections="collections"
					:page="page"
					@pagination="(action) => pagination(action)"
					:loading="loading"
				/>
			</BTab>

			<!-- Automatic Creator -->
			<BTab title="Automatic Creator">
				<AutomaticCreator />
			</BTab>

			<!-- Manual Creator -->
			<BTab title="Manual Creator">
				<ManualCreator />
			</BTab>
		</BTabs>

		<BCard v-if="error" class="my-3 bg-danger text-light shadow">
			<h6 class="m-0">ERROR: {{ error }}</h6>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import AutomaticCreator from '../../../components/admin/shopify/smart-collection/AutomaticCreator'
	import ViewAll from '../../../components/admin/shopify/smart-collection/ViewAll'
	import ManualCreator from '../../../components/admin/shopify/smart-collection/ManualCreator'
	import router from '@/router'
	import ShopifyService from '../../../services/admin/ShopifyService'

	export default {
		data() {
			return {
				loading: true,
				resData: {},
				collections: [],
				collectionCount: 0,
				maxPages: 0,
				error : '',

				limit: parseInt(this.$route.params.limit),
				page: parseInt(this.$route.params.page),
			}
		},

		components: {
			AutomaticCreator,
			ViewAll,
			ManualCreator,
		},

		methods: {
			async getPageData() {
				this.loading = true

				this.resData = await ShopifyService.s_smartCollections_readAll({
					limit: this.limit,
					page: this.page,
				})

				if (this.resData.status) {
					// [CLEAR-ERROR] //
					this.error = ''

					this.collections = this.resData.collections
					this.collectionCount = this.resData.collectionCount
					this.maxPages = this.resData.maxPages
				}
				else {
					this.collections = []
					this.error = this.resData.message
				}

				this.loading = false
			},

			async pagination(action) {
				switch (action) {
					case 'previous':
						this.page--

						router.push(
							`/admin/shopify/smart-collection/${this.limit}/${this.page}`
						)

						await this.getPageData()
					break

					case 'next':
						this.page++

						router.push(
							`/admin/shopify/smart-collection/${this.limit}/${this.page}`
						)

						await this.getPageData()
					break
				
					default:
						console.log('Invalid action')
					break
				}
			},
		},

		async created() {
			await this.getPageData()
		},
	}
</script>