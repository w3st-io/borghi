<template>
	<BContainer fluid class="bg-white">
		<BRow>
			<BCol
				cols="12" md="6" lg="4"
				class="my-auto text-center text-primary"
			>
				<div class="my-5" data-aos="fade-up">
					<h1 class="">Find Us</h1>
			
					<a :href="companyInfo.googleMapsLink">
						<h2 class="mb-3 text-center text-secondary">
							{{ companyInfo.address }}
						</h2>
					</a>

					<a :href="companyInfo.googleMapsLink">
						<BButton variant="primary" size="lg" class="shadow">
							<MapPinIcon /> Open Google Maps
						</BButton>
					</a>
				</div>
			</BCol>

			<BCol
				cols="12" md="6" lg="8"
				class="p-0 map"
				data-aos="fade-up"
			>
				<iframe
					:src="companyInfo.googleMapsEmbed"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>

<style lang="scss">
	.map { height: calc(100vh - 120px); }
</style>