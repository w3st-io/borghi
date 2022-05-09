<template>
	<BContainer class="my-5">
		<BCard
			bg-variant="white"
			text-variant="dark"
			class="shadow"
		>
			<BTabs v-if="$store.state.admin.logged && loading == false" pills>
				<!-- [FACEBOOK-MARKETPLACE] -->
				<BTab
					title="Facebook"
					v-bind="{ 'active': $route.params.tab == 0 }"
					class="py-5"
					@click="switchTab('0')"
				>
					<BRow>
						<!-- [FACEBOOK-MARKETPLACE] -->
						<BCol cols="12">
							<div v-if="this.facebookListings.length > 0">
								<BCard
									v-for="(fbl, i) in facebookListings"
									:key="i"
									bg-variant="light"
									text-variant="dark"
									class="mb-4"
								>
									<BRow>
										<BCol cols="12" sm="4" md="3">
											<img :src="fbl.node.listing.primary_listing_photo.image.uri" class="w-100">
										</BCol>

										<BCol cols="12" sm="6" md="7">
											<h3 class="text-primary">
												{{ fbl.node.listing.marketplace_listing_title }}
											</h3>
											<h4 class="text-dark">
												Location: {{ fbl.node.listing.location.reverse_geocode.city_page.display_name }}
											</h4>
											<h4 class="text-success">
												Price: {{ fbl.node.listing.listing_price.formatted_amount }}
											</h4>
											<p>{{ fbl.node.listing }}</p>
										</BCol>

										<BCol cols="12" sm="2">
											<a
												:href="`https://www.facebook.com/marketplace/item/${fbl.node.listing.id}`"
												target="blank"
											>
												<BButton variant="primary" class="w-100">View</BButton>
											</a>
										</BCol>
									</BRow>
								</BCard>
							</div>

							<div v-else>
								<h3 class="text-center text-primary">Nothing Found</h3>
								<lottie-player
									src="https://assets6.lottiefiles.com/packages/lf20_pxmjlK.json"
									class="m-0 mx-auto text-center"
									style="max-width: 200px;"
									background="transparent"
									speed="1"
									loop
									autoplay
								/>
							</div>
						</BCol>
					</BRow>
				</BTab>

				<!-- [REDDIT] -->
				<BTab
					title="Reddit"
					v-bind="{ 'active': $route.params.tab == 1 }"
					class="py-5"
					@click="switchTab('1')"
				>
					<BRow>
						<!-- [REDDIT] -->
						<BCol cols="12">
							<div v-if="this.redditPosts.length > 0">
								<BCard
									v-for="(rp, i) in this.redditPosts"
									:key="i"
									class="mb-2 p-0"
								>
									<BRow>
										<BCol cols="12" md="4" lg="3">									
											<img
												v-if="rp.data.thumbnail"
												:src="rp.data.thumbnail"
												alt="No image"
												class="w-100"
											>
										</BCol>

										<BCol cols="12" md="8" lg="9">
											<a
												:href="`https://reddit.com${rp.data.permalink}`"
												target="blank"
											>
												<h6>{{ rp.data.title }}</h6>
											</a>
											<h6 class="small">{{ rp.data.author }}</h6>

											<p>{{ rp.data.selftext }}</p>
										</BCol>
									</BRow>
								</BCard>
							</div>

							<div v-else>
								<h3 class="text-center text-primary">Nothing Found</h3>
								<lottie-player
									src="https://assets6.lottiefiles.com/packages/lf20_pxmjlK.json"
									class="m-0 mx-auto text-center"
									style="max-width: 200px;"
									background="transparent"
									speed="1"
									loop
									autoplay
								/>
							</div>
						</BCol>
					</BRow>
				</BTab>
			</BTabs>

			<!-- [NOT-ADMIN-LOGGED] -->
			<BRow v-if="!$store.state.admin.logged">
				<BCol cols="12">
					<div class="text-center">
						<h3 class="text-primary">Admin Not Logged In</h3>
					
						<RouterLink to="/admin/login">
							<BButton
								variant="primary"
								size="lg"
								class="w-100 my-4"
								style="max-width: 300px;"
							>Login</BButton>
						</RouterLink>
					</div>
				</BCol>
			</BRow>

			<!-- [LOADING] -->
			<BRow v-if="loading">
				<BCol cols="12">
					loading..
				</BCol>
			</BRow>
		
			<!-- [ERROR] -->
			<BRow v-if="error">
				<BCol cols="12">
					<h5 class="m-0 text-danger">{{ error }}</h5>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import router from '@/router'
	import PageService from '@/services/PageService'

	export default {
		components: {},

		data() {
			return {
				tab: this.$route.params.tab,
				resData: {},
				password: '',
				facebookListings: [],
				redditPosts: [],

				loading: true,
				error: '',
			}
		},

		methods: {
			async getPageData() {
				this.loading = true

				try {
					this.resData = await PageService.s_screener()

					if (this.resData.status) {
						this.facebookListings = this.resData.facebookListings
						this.redditPosts = this.resData.redditPosts
					}
					else { this.error = this.resData.message }
				}
				catch (err) { this.error = err }

				this.loading = false
			},

			refreshRoute() {
				router.push({
					name: 'screener',
					params: {
						tab: this.tab,
					}
				})
			},

			async switchTab(tab) {
				this.tab = tab

				this.refreshRoute()

				//await this.getPageData()
			},
		},

		async created() {
			await this.getPageData()
		},
	}
</script>