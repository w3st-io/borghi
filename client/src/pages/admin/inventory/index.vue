<template>
	<BContainer class="py-5">
		<BTabs pills>
			<!-- Current Collections -->
			<BTab title="Automatic Label Creator" active>
				<!-- [AUTOMATIC] -->
				<BCard no-body class="my-3 shadow">
					<BCardHeader class="bg-primary">
						<BCol md="12">
							<h4 class="m-0 text-light">Provide Bulk CSV File</h4>
						</BCol>
					</BCardHeader>

					<BCardBody>
						<!-- Upload Section -->
						<BRow class="">
							<BCol md="10">
								<h6 class="text-secondary">Attach File</h6>
								<input
									ref="file"
									type="file"
									@change="automatic_convertCSVToJSON($event)"
								>
							</BCol>

							<BCol md="2">
								<h6 class="text-secondary">Days Back to Search</h6>
								<input
									v-model="automatic.daysAgo"
									type="input"
									class="form-control i"
									placeholder="Search Days Back"
								>
							</BCol>

							<BCol cols="12">
								<hr class="my-3" style="border-style: dashed;">
							</BCol>
						</BRow>

						<!-- Headers -->
						<BRow class="mb-3">
							<BCol cols="3">
								<h6>Listing_id</h6>
							</BCol>

							<BCol cols="3">
								<h6>Album Title</h6>
							</BCol>

							<BCol cols="2">
								<h6>location</h6>

							</BCol>

							<BCol cols="2">
								<h6>price</h6>
							</BCol>

							<BCol cols="2">
								<h6>Remove</h6>
							</BCol>
						</BRow>
							
						<!-- Automatic Render -->
						<BRow
							v-for="(l, i) in automatic.listings"
							:key="i"
							class="mb-3"
						>
							<BCol cols="3">
								<input
									v-model="l.listing_id"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="3">
								<input
									v-model="l.albumTitle"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<input
									v-model="l.location"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<input
									v-model="l.price"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<BButton
									variant="danger"
									class="w-100"
									pill
									@click="automatic_remove(i)"
								>X</BButton>
							</BCol>
						</BRow>

						<!-- Create Section -->
						<BRow>
							<BCol cols="12">
								<div class="text-center">
									<BButton
										:disabled="automatic.submitted"
										variant="success"
										pill
										size="sm"
										class="px-3"
										@click="automatic_autoFill()"
									>Generate Label Data</BButton>
								</div>
							</BCol>
						</BRow>
					</BCardBody>

					<BCardFooter class="">
						<!-- Download Section -->
						<BRow>
							<!-- [SUBMIT] Autmatic Labels -->
							<BCol md="12" class="mb-1">
								<BButton
									:disabled="automatic.submitted"
									class="w-100 my-2"
									variant="success"
									pill
									size="lg"
									@click="automatic_submit()"
								>Download Labels</BButton>
							</BCol>

							<!-- [ERROR] -->
							<BCol v-if="automatic.error">
								<h6 class="text-danger">{{ automatic.error }}</h6>
							</BCol>
						</BRow>
					</BCardFooter>
				</BCard>
			</BTab>

			<BTab title="Manual Label Creator">
				<!-- [MANUAL] -->
				<BCard no-body class="my-3 shadow">
					<BCardHeader class="bg-primary">
						<BCol md="12">
							<h4 class="m-0 text-light">Provide Listing IDs</h4>
						</BCol>
					</BCardHeader>

					<BCardBody>
						<!-- Load Section -->
						<BRow>
							<BCol cols="9">
								<BFormSelect
									v-model="manual.selected"
									:options="manual.options"
								></BFormSelect>
							</BCol>

							<BCol cols="3">
								<BButton
									variant="primary"
									class="w-100"
									pill
									@click="manual_loadSaveProfile()"
								>Load</BButton>
							</BCol>

							<BCol cols="9">
								<BButton
									variant="success"
									class="w-100 mt-3"
									pill
									@click="manual_saveToSaveProfile()"
								>Save to Profile</BButton>
							</BCol>

							<BCol cols="3" class="text-center">
								<BFormCheckbox
									v-model="manual.autosave"
									:value="true"
									:unchecked-value="false"
									class="mt-3"
								>Auto Save</BFormCheckbox>
							</BCol>

							<BCol cols="12">
								<hr class="my-3" style="border-style: dashed;">
							</BCol>
						</BRow>

						<!-- Headers -->
						<BRow class="mb-3">
							<BCol cols="3">
								<h6>Listing_id</h6>
							</BCol>

							<BCol cols="3">
								<h6>Album Title</h6>
							</BCol>

							<BCol cols="2">
								<h6>location</h6>

							</BCol>

							<BCol cols="2">
								<h6>price</h6>
							</BCol>

							<BCol cols="2">
								<h6>Remove</h6>
							</BCol>
						</BRow>

						<!-- Manual Render -->
						<BRow
							v-for="(l, i) in manual.listings"
							:key="i"
							class="mb-3"
						>
							<BCol cols="3">
								<input
									v-model="l.listing_id"
									@change="manual_autoFill(i)"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="3">
								<input
									v-model="l.albumTitle"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<input
									v-model="l.location"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<input
									v-model="l.price"
									type="text"
									class="form-control i"
								>
							</BCol>

							<BCol cols="2">
								<BButton
									variant="danger"
									class="w-100"
									pill
									@click="manual_remove(i)"
								>X</BButton>
							</BCol>
						</BRow>

						<!-- Create Section -->
						<BRow>
							<BCol cols="12">
								<!-- Add Listing -->
								<div class="text-center">
									<!-- Using components -->
									<BInputGroup class="mx-auto" style="max-width: 300px;">
										<BFormInput
											v-model="manual.addListingAmount"
											placeholder="#"
										></BFormInput>

										<BInputGroupAppend>
											<BButton
												variant="success"
												@click="manual_addListingTemplate()"
											>Add Listing +</BButton>
										</BInputGroupAppend>
									</BInputGroup>
								</div>
							</BCol>
						</BRow>
					</BCardBody>

					<BCardFooter class="">
						<!-- Download Section -->
						<BRow>
							<!-- [SUBMIT] Generate Labels -->
							<BCol cols="12">
								<BButton
									variant="success"
									class="w-100 my-2"
									pill
									size="lg"
									@click="manual_submit()"
								>Download Labels</BButton>
							</BCol>

							<!-- [ERROR] -->
							<BCol v-if="manual.error">
								<h6 class="text-danger">{{ manual.error }}</h6>
							</BCol>
						</BRow>
					</BCardFooter>
				</BCard>
			</BTab>
		</BTabs>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import LabelService from '@/services/admin/LabelService'
	import CSVHandler from '@/util/CSVHandler'

	
	export default {
		data() {
			return {
				loading: true,
				resData: {},
				error: '',

				automatic: {
					daysAgo: 1,
					submitted: false,
					vinylsJSON: [],
					listings: [],

					loading: false,
					error: '',
				},

				manual: {
					autosave: true,
					selected: 'Save Profile 1',
					options: ['Save Profile 1', 'Save Profile 2', 'Save Profile 3',],
					addListingAmount: 1,

					listings: [],

					error: '',
				},
			}
		},
		
		methods: {
			/*
			 * [AUTOMATIC]
			*/
			async automatic_convertCSVToJSON(event) {
				// [LOADING] //
				this.loading = true

				this.automatic.vinylsJSON = await CSVHandler.CSVtoJSON({
					file: event.target.files[0]
				})
				
				// [LOADING] //
				this.loading = false
			},

			async automatic_autoFill() {
				if (this.automatic.vinylsJSON.length > 0) {
					this.automatic.submitted = true

					this.resData = await LabelService.s_generateAutomatic({
						daysAgo: this.automatic.daysAgo,
						vinylsJSON: this.automatic.vinylsJSON,
					})

					if (this.resData.status) {
						this.automatic.loading = true

						this.automatic.listings = this.resData.listings

						this.automatic.loading = false
					}
					else {
						this.automatic.error = this.resData.message
					}

					this.automatic.submitted = false
				}
				else {
					this.automatic.error = 'No file attached'
				}
			},

			async automatic_remove(i) {
				this.automatic.listings.splice(i, 1)
			},

			async automatic_submit() {
				this.automatic.error = ''

				if (this.automatic.listings.length <= 0) {
					this.automatic.error = 'No Listing Data'

					return
				}
				
				for (let i = 0; i < this.automatic.listings.length; i++) {
					const l = this.automatic.listings[i]
					
					if (!l.listing_id || !l.albumTitle || !l.location || !l.price) {
						this.automatic.error = 'Field(s) Missing'
					
						return
					}
				}
					
				await LabelService.s_generateManual({
					vinylsJSON: this.automatic.listings
				})
			},

			/*
			 * [MANUAL]
			*/
			manual_loadSaveProfile() {
				console.log(`Loading ${this.manual.selected}..`)

				switch (this.manual.selected) {
					case 'Save Profile 1':
						this.manual.listings = JSON.parse(
							localStorage.labelsSaveProfile_1
						)
					break

					case 'Save Profile 2':
						this.manual.listings = JSON.parse(
							localStorage.labelsSaveProfile_2
						)
					break;

					case 'Save Profile 3':
						this.manual.listings = JSON.parse(
							localStorage.labelsSaveProfile_3
						)
					break;
				
					default:
						this.manual.error = 'Invalid Save Profile'
					break
				}
			},


			manual_saveToSaveProfile() {
				console.log(`Saving to ${this.manual.selected}..`)

				switch (this.manual.selected) {
					case 'Save Profile 1':
						localStorage.labelsSaveProfile_1 = JSON.stringify(
							this.manual.listings
						)
					break

					case 'Save Profile 2':
						localStorage.labelsSaveProfile_2 = JSON.stringify(
							this.manual.listings
						)
					break

					case 'Save Profile 3':
						localStorage.labelsSaveProfile_3 = JSON.stringify(
							this.manual.listings
						)
					break
				
					default:
						this.manual.error = 'Invalid Save Profile'
					break
				}
			},


			manual_addListingTemplate() {
				for (let i = 0; i < this.manual.addListingAmount; i++) {
					this.manual.listings.push({
						listing_id: '',
						albumTitle: '',
						location: '',
						price: '',
						release_id: '',
					})
				}
			},

			async manual_autoFill(i) {
				this.resData = await LabelService.s_getListing({
					listing_id: this.manual.listings[i].listing_id
				})

				if (this.resData.status) {
					const l = this.resData.listing
	
					this.manual.listings[i].location = l.location || 'NA'
					this.manual.listings[i].price = l.original_price.value || 'NA'
					this.manual.listings[i].release_id = l.release.id || 'NA'
					this.manual.listings[i].albumTitle = l.release.title || 'NA'
				}
				else { this.manual.error = this.resData.message }

				this.manual_saveToSaveProfile()
			},

			async manual_remove(i) {
				this.manual.listings.splice(i, 1)
			},

			async manual_submit() {
				this.manual.error = ''

				if (this.manual.listings.length <= 0) {
					this.manual.error = 'No Listing Data'

					return
				}
				
				for (let i = 0; i < this.manual.listings.length; i++) {
					const l = this.manual.listings[i]
					
					if (!l.listing_id || !l.albumTitle || !l.location || !l.price) {
						this.manual.error = 'Field(s) Missing'

						return
					}
				}

				await LabelService.s_generateManual({
					vinylsJSON: this.manual.listings
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.i {
		width: 100%;
	}
</style>