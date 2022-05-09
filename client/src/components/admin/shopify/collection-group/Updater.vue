<template>
	<BCard no-body class="">
		<!-- title -->
		<BCardHeader class="bg-primary">
			<h4 class="m-0 text-light">Provide Discogs Inventory CSV</h4>
		</BCardHeader>

		<!-- Generate and Day Count -->
		<BCardBody>
			<h6>Collection Group: {{ title }}</h6>
			<h6>Column Name: {{ columnName }}</h6>
			<p class="text-dark">{{ explanation }}</p>
			<hr>

			<input
				ref="file"
				type="file"
				class="mb-3"
				@change="convertCSVToJSON($event)"
			>
			<h6 class="text-primary">
				Row Count: {{ this.operation.JSONData.length }}
			</h6>
		</BCardBody>

		<BCardFooter>
			<!-- Download Section -->
			<BRow>
				<BCol md="12" class="mb-1">
					<!-- [SUBMIT] Autmatic Labels -->
					<BButton
						class="w-100 my-2"
						variant="success"
						pill
						size="lg"
						:disabled="submitted"
						@click="collectionsGroup_update()"
					>Update Collection Group for {{ columnName }}</BButton>

					<!-- [SUCCESS] -->
					<h6 v-if="success" class="my-1 text-success">
						Created!
					</h6>

					<!-- [ERROR] -->
					<h6 v-if="error" class="my-1 text-danger">{{ error }}</h6>
				</BCol>
			</BRow>
		</BCardFooter>
	</BCard>
</template>

<script>
	// [IMPORT] Personal //
	import CollectionGroupService from '@/services/admin/shopify/CollectionGroupService'
	import CSVHandler from '@/util/CSVHandler'

	export default {
		props: {
			title: {
				required: true,
				type: String,
			},

			columnName: {
				required: true,
				type: String,
			},
		},
		
		data() {
			return {
				explanation: 'by providing a inventory list we will update your collection group',
				
				operation: {
					JSONData: [],
					cache: [],
				},

				submitted: false,
				success: false,
				error: '',
			}
		},

		methods: {
			/* [COLLECTION-CREATOR] */
			cleanUpArtistJSONData() {
				// Remove unnessary data
				for (let i = 0; i < this.operation.JSONData.length; i++) {
					this.operation.JSONData[i] = {
						[this.columnName]: this.operation.JSONData[i][this.columnName]
					}
					console.log(this.operation.JSONData[i][this.columnName])
				}

				// Remove repetitions
				this.operation.JSONData = this.operation.JSONData
					.reduce(
						(unq, o) => {
							if (!unq.some(obj => obj[this.columnName] === o[this.columnName])) {
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

				this.operation.JSONData = await CSVHandler.CSVtoJSON({
					file: event.target.files[0]
				})

				this.cleanUpArtistJSONData()
				
				// [LOADING] //
				this.loading = false
			},


			async collectionsGroup_update() {
				this.submitted = true

				this.resData = await CollectionGroupService.s_updateOne({
					title: this.title,
					columnName: this.columnName,
					JSONData: this.operation.JSONData
				})

				if (this.resData.status) {
					this.success = true
					this.error = ''
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