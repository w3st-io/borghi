<template>
	<BCard no-body class="">
		<BCardHeader class="bg-primary">
			<h4 class="m-0 text-light">Provide Discogs Inventory CSV</h4>
		</BCardHeader>

		<!-- Generate and Day Count -->
		<BCardBody>
			<p class="text-dark">
				{{ explanation }}
			</p>
			<hr>

			<input
				ref="file"
				type="file"
				class="mb-3"
				@change="convertCSVToJSON($event)"
			>
			<h6 class="text-primary">
				Artist Count: {{ artist.JSONData.length }}
			</h6>
		</BCardBody>

		<BCardFooter>
			<!-- Download Section -->
			<BRow>
				<!-- [SUBMIT] Autmatic Labels -->
				<BCol md="12" class="mb-1">
					<BButton
						class="w-100 my-2"
						variant="success"
						pill
						size="lg"
						:disabled="submitted"
						@click="collectionsCreate()"
					>Create Collections</BButton>

					<h6 v-if="success" class="my-1 text-success">Created Collection!</h6>
					<h6 v-if="error" class="my-1 text-danger">{{ error }}</h6>
				</BCol>
			</BRow>
		</BCardFooter>
	</BCard>
</template>

<script>
	// [IMPORT] Personal //
	import ShopifyService from '@/services/admin/ShopifyService'
	import CSVHandler from '@/util/CSVHandler'

	export default {
		data() {
			return {
				explanation: 'By providing the inventory csv, collections will be created for the every artist. (Will not create duplicates)',
				
				artist: {
					JSONData: [],
					cache: [],
				},

				submitted: false,
				success: false,
				error: '',
			}
		},

		methods: {
			/*
			* [COLLECTION-CREATOR]
			*/
			cleanUpArtistJSONData() {
				// Remove unnessary data
				for (let i = 0; i < this.artist.JSONData.length; i++) {
					this.artist.JSONData[i] = {
						artist: this.artist.JSONData[i].artist
					}
				}

				// Remove repetitions
				this.artist.JSONData = this.artist.JSONData
					.reduce(
						(unq, o) => {
							if (!unq.some(obj => obj.artist === o.artist)) {
								unq.push(o)
							}

							return unq
						},
						[]
					)
			},


			async convertCSVToJSON(event) {
				// [LOADING] //
				this.loading = true

				this.artist.JSONData = await CSVHandler.CSVtoJSON({
					file: event.target.files[0]
				})

				this.cleanUpArtistJSONData()
				
				// [LOADING] //
				this.loading = false
			},


			async collectionsCreate() {
				this.submitted = true

				this.resData = await ShopifyService.s_smartCollections_create_artists({
					JSONData: this.artist.JSONData
				})

				if (this.resData.status) {
					this.success = true
					this.error = ''

					this.artist.cache = this.resData.cache
				}
				else {
					this.success = false
					this.error = this.resData.message
				}

				this.submitted = false
			},
		},
	}
</script>