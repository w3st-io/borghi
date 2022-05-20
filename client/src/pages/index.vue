<template>
	<div v-if="loading == false" class="background-img">
		<div style="height: 100vh;">
			<BContainer class="center-content" style="padding-top: 20px;">
				<BRow>
					<BCol
						cols="12" md="3"
						class="d-none d-md-block"
						style="padding-top: 100px;"
					>
						<div class="p-2 bg-glass">
							<img :src="borghiImage" class="w-100">
						</div>
					</BCol>

					<BCol cols="12" md="8" style="padding-top: 100px;">
						<h1
							class="m-0 text-light hero-text"
							data-aos="fade-right"
							data-aos-delay="0"
						><span class="px-2 pt-3 bg-glass">BORGHI</span></h1>
						<h1
							class="m-0 text-light hero-text"
							data-aos="fade-right"
							data-aos-delay="100"
						><span class="px-2 pt-3 bg-glass">FINE</span></h1>
						<h1
							class="m-0 text-light hero-text"
							data-aos="fade-right"
							data-aos-delay="200"
						><span class="px-2 pt-3 bg-glass">ART</span></h1>

						<router-link to="/artist">
							<BButton variant="light">
								<h1 class="m-0 text-uppercase">
									View Artist
									<ArrowRightIcon
										size="1.1x"
										stroke-width=".5px"
										class="m-0"
									/>
								</h1>
							</BButton>
						</router-link>
					</BCol>
				</BRow>
			</BContainer>
		</div>
		<!-- INFO -->
		<ContactInfo />
	</div>
</template>

<script>
	import { ArrowRightIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import ContactInfo from '@/components/ContactInfo'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			ArrowRightIcon,
			ContactInfo,
		},

		data() {
			return {
				loading: true,

				pageData: pageData,
				reqData: {},
				services: [],

				borghiImage: require('../assets/logo-light.png')
			}
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},

		async created() {
			this.$store.state.isHomePage = true

			this.loading = false
		},

		destroyed() {
			this.$store.state.isHomePage = false
		},
	}
</script>

<style lang="scss" scoped>
	.background-img {
		background-image: url('../assets/bg.jpg');
		background-position: center;
		background-size: inherit;
	}

	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }

	.hero-text {
		font-size: 6.3em;
	}
</style>
