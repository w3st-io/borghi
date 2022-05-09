<template>
	<div class="py-5 bg-white">
		<BContainer>
			<!-- Instagram -->
			<div class="mx-auto mb-5">
				<viewer :options="{ title: false, transition: false, }">
					<BRow>
						<!-- Title -->
						<BCol cols="12">
							<h1 class="mb-3 text-center text-primary">Instagram</h1>
						</BCol>

						<BCol
							v-for="(item, i) in instagramFeed" :key="i"
							cols="6" md="4" lg="3"
						>
							<div class="py-3">
								<img
									:src="item.media_url"
									v-lazy="item.media_url"
									class="w-100"
								>
							</div>
						</BCol>
					</BRow>
				</viewer>
			</div>
		</BContainer>
	</div>
</template>

<script>
	import PageService from '../services/PageService'

	export default {
		data() {
			return {
				instagramFeed: [],
			}
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_gallery()

				if (this.reqData.status) {
					this.instagramFeed = this.reqData.instagramFeed
				}
			}
		},

		async created() {
			await this.getPageData()
		},
	}
</script>

<style lang="scss">
	.label {
		background-color: rgba(0, 0, 0, 0.48);
	}

	.icon {
		img {
			transition: .6s;
			filter: grayscale(100%);
		}

		&:hover { img { filter: grayscale(0%); } } 
	}
</style>