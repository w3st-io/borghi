<template>
	<BContainer class="py-5">
		<BRow class="mb-5 mx-1 shadow">
			<BCol
				cols="12"
				class="p-0 bg-primary border-bottom border-light"
				style="
					min-height: 80px;
					background-position: right;
					border-width: 3px !important;
				"
			>
				<h2 class="text-center m-0 py-4  text-light">
					Book an Appointment with Us
				</h2>
			</BCol>

			<!-- [CONTACT-INFO] -->
			<BCol
				cols="12" lg="7"
				class="px-md-5 py-5 bg-light bg-dotted border-bottom border-light"
				style="border-width: 3px !important;"
			>
				<BRow>
					<BCol cols="12">
						<h1 class="text-center mb-5 text-primary">
							Appointments Only
						</h1>
					</BCol>

					<BCol cols="12">
						<!-- JONNY -->
						<h2 class="mb-3 text-center text-dark">
							Cell
						</h2>

						<!-- Phone Number -->
						<a :href="pData.jonnyPhoneNumberLink">
							<BButton
								pill
								variant="primary"
								size="lg"
								class="w-100 mb-5"
								style="border-width: 3px !important;"
							>
								<PhoneIcon />
								{{ pData.jonnyPhoneNumber }}
							</BButton>
						</a>
					</BCol>

					<BCol cols="12">
						<!-- Joey -->
						<h2 class="mb-3 text-center text-dark">
							Email Us
						</h2>
					</BCol>

					<BCol cols="12">
						<!-- Email -->
						<a :href="pData.emailLink">
							<BButton
								pill
								variant="primary"
								size="lg"
								class="w-100 mb-5"
								style="border-width: 3px !important;"
							>
								<MailIcon size="1x" />
								{{ pData.email }}
							</BButton>
						</a>
					</BCol>
				</BRow>
			</BCol>

			<!-- [AVAILABLE-AND-FOLLOW] -->
			<BCol
				cols="12" lg="5"
				class="p-0 text-center bg-light text-light border-left border-bottom border-light"
				style="
					min-height: 80px;
					background-position: right;
					border-width: 3px !important;
				"
				data-aos="fade"
			>
				<div class="p-5">
					<h2 class="mb-3  text-primary">Available Time</h2>
					<br>
					
					<h4
						v-for="(h, i) in pData.hoursOfOperation" :key="i"
						class="text-dark"
					>
						<span class="text-secondary">{{ h.days }}</span>
						<br>
						{{ h.hours }}
						<br><br>
					</h4>

					<hr>

					<!-- Social Media -->
					<h2 class="mb-3 text-center  text-primary">
						Follow Us
					</h2>
					<div class="text-center">
						<SocialMediaPlug
							size="2.5x"
							variant="dark"
							class="w-100 mx-auto mb-3"
						/>
					</div>
				</div>
			</BCol>
		</BRow>

		<BRow class="mb-5 mx-1 shadow">
			<BCol
				cols="12"
				class="py-3 text-center bg-primary border-bottom border-light bg-dotted"
				style="border-width: 3px !important;"
			>
				<h1 class="m-0  text-light">
					<span class="px-2 bg-primary">Our Location</span>
				</h1>
			</BCol>

			<BCol
				cols="12"
				class="p-0 text-center bg-light border-bottom border-light bg-striped"
				style="border-width: 3px !important;"
			>
				<div class="p-3 bg-">
					<a :href="pData.googleMapsLink" target="blank">
						<BButton
							pill
							variant="primary"
							size="lg"
							class="mb-4 p-4"
						>
							<h5 class="mb-0">
								<MapPinIcon />
								{{ pData.address }}
							</h5>
						</BButton>
					</a>
					<iframe
						:src="pData.googleMapsEmbed"
						width="100%"
						height="450"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon, MailIcon } from 'vue-feather-icons'


	// [IMPORT] Personal //
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import pData from '@/defaults/pages/contact'

	export default {
		components: {
			MapPinIcon,
			PhoneIcon,
			MailIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				pData: pData
			}
		},
	}
</script>