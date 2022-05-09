<template>
	<BContainer class="py-5">
		<BCard class="mb-4 shadow" no-body>
			<BCardHeader class="text-center bg-primary text-light">
				<h2 class="m-0">
					{{ listing.albumTitle }} - {{ listing_id }}
				</h2>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol sm="12" md="5" order="1" order-sm="0" class="text-center">
						<img :src="listing.image" class="w-100 mb-4" style="max-width: 400px;">
					</BCol>

					<BCol sm="6" md="4" order="2" order-sm="1">
						<h6 class="text-primary">Price</h6>
						<h4 class="">${{ listing.price }}</h4>

						<h6 class="text-primary">Location</h6>
						<h4 class="">{{ listing.location }}</h4>
					
						<h6 class="text-primary">Artist</h6>
						<h4 class="">{{ listing.artist }}</h4>

						<h6 class="text-primary">Year</h6>
						<h4 class="">{{ listing.year }}</h4>

						<h6 class="text-primary">Description</h6>
						<h4 class="">{{ listing.description }}</h4>
					</BCol>

					<BCol sm="6" md="3" order="0" order-sm="2">
						<a
							v-if="listingStatus == 'For Sale'"
							:href="`https://www.discogs.com/sell/item/${listing_id}`"
							target="_blank"
						>
							<BButton
								size="lg"
								variant="dark"
								class="w-100 mb-3"
								pill
							>View on Discogs</BButton>
						</a>

						<a :href="`https://www.discogs.com/release/${listing.release.id}`" target="_blank">
							<BButton
								size="lg"
								variant="dark"
								class="w-100"
								pill
							>Discogs Release</BButton>
						</a>
						<hr>

						<link
							rel="stylesheet"
							href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
						>
						
						<div class="text-center mb-3">
							<a :href="defaultData.instagramLink" target="_blank">
								<h5 class="text-primary">Follow Us on Instagram</h5>

								<span class="instagram">
									<span class="fa fa-instagram"></span>
								</span>
							</a>
						</div>
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>

		<BCard class="mb-4 shadow" no-body>
			<BCardHeader class="text-center bg-primary text-light">
				<h2 class="m-0">
					Checkout
				</h2>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol md="4" class="mb-3 text-center">
						<h1 class="text-center text-primary">Venmo</h1>
						<img :src="venmoQRCode" class="w-100" style="max-width: 400px;">
					</Bcol>

					<BCol md="4" class="mb-3 text-center">
						<h1 class="text-center text-primary">Ethereum</h1>
						<img :src="ethereumQRCode" class="w-100" style="max-width: 400px;">
					</Bcol>

					<BCol md="4" class="mb-3 text-center">
						<h1 class="text-center text-primary">Bitcoin</h1>
						<img :src="bitcoinQRCode" class="w-100" style="max-width: 400px;">
					</Bcol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import defaultData from '@/defaults/companyInfo'
	import LabelService from '../services/admin/LabelService'

	export default {
		data() {
			return {
				defaultData: defaultData,
				listing_id: this.$route.params.listing_id,

				listing: {
					image: 'https://images2.imgbox.com/df/67/hJuA23jF_o.jpeg',
					albumTitle: 'Unavailable',
					location: 'Unavailable',
					price: '_.__',
					artist: 'Unavailable',
					year: '____',
					description: 'Unavailable',
					release: {},
				},

				listingStatus: '',

				venmoQRCode: require('../assets/venmo.svg'),
				ethereumQRCode: require('../assets/ethereum-address.svg'),
				bitcoinQRCode: require('../assets/bitcoin-address.svg'),
			}
		},

		methods: {
			async manual_autoFill() {
				this.resData = await LabelService.s_getListing({
					listing_id: this.listing_id
				})

				if (this.resData.status) {
					this.listingStatus = this.resData.listing.status || ''
					this.listing.image = this.resData.listing.release.images[0].resource_url || ''
					this.listing.albumTitle = this.resData.listing.release.title || ''
					this.listing.location = this.resData.listing.location || ''
					this.listing.price = this.resData.listing.original_price.value || ''
					this.listing.artist = this.resData.listing.release.artist || ''
					this.listing.year = this.resData.listing.release.year || ''
					this.listing.description = this.resData.listing.release.description || ''
					this.listing.release = this.resData.listing.release
				}
				else { this.error = this.resData.message }
			}
		},

		async created() {
			await this.manual_autoFill()
		},
	}
</script>

<style lang="scss" scoped>
	.instagram {
		display: inline-block;
		width: 50px;
		height: 50px;
		text-align: center;
		border-radius: 4px;
		color: #fff;
		font-size: 44px;
		line-height: 50px;
		vertical-align: middle;
		background: #d6249f;
		background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
	}
</style>