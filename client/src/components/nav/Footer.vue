<template>
	<!-- Footer -->
	<div class="w-100 bg-dark text-light">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<h5 class="text-primary">
						{{ companyInfo.companyName }} Ⓒ
						{{ new Date().getFullYear() }}
					</h5>
					<h6 v-html="companyInfo.companyCaption" class="text-light">
					</h6>
					<hr>
				</BCol>

				<BCol cols="12" md="4" class="text-center text-md-left" data-aos="fade-up">
					<h4 class="text-primary">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-primary">Hours</h4>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-secondary">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>

					<h4 class="text-primary">Admin</h4>
					<RouterLink
						v-if="!$store.state.admin.logged"
						to="/admin/login"
					>
						<BButton
							variant="outline-success"
							class="w-100"
						>Login</BButton>
					</RouterLink>

					<RouterLink
						v-if="$store.state.admin.logged"
						to="/discogs-orders"
					>
						<BButton
							variant="outline-primary"
							class="w-100 mb-3"
						>Discogs Orders</BButton>
					</RouterLink>

					<RouterLink
						v-if="$store.state.admin.logged"
						to="/inventory"
					>
						<BButton
							variant="outline-primary"
							class="w-100 mb-3"
						>Inventory</BButton>
					</RouterLink>
				</BCol>

				<BCol cols="12" md="4" class="text-center" data-aos="fade-up">
					<h4 class="text-primary">Check Us Out</h4>
					<ul class="list-unstyled text-small">
						<li v-for="(link, i) in pageLinks" :key="i">
							<RouterLink to="/services" class="text-light">
								<span v-if="link.text">{{ link.text }}</span>
								<span v-else v-html="link.navIcon"></span>
							</RouterLink>
						</li>
					</ul>
				
					<!-- Legal -->
					<h4 class="text-primary">Legal</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/privacy-policy" class="text-light">
								Privacy Policy & Terms of Service
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" md="4" class="text-center" data-aos="fade-up">
					<BRow>
						<BCol cols="12">
							<h4 class="text-primary">Follow Us</h4>
							<SocialMediaPlug variant="light" class="mb-3" />
						</BCol>

						<BCol cols="12" class="p-0">
							<h4 class="text-primary">Accepted Payment Methods</h4>
						</BCol>

						<!-- VENMO -->
						<BCol cols="2" class="p-0">
							<img
								src="https://images2.imgbox.com/b3/0d/tQpcTJKc_o.png"
								class="w-100 mb-3"
								style="max-width: 30px;"
							>
						</BCol>

						<!-- CASHAPP -->
						<BCol cols="2" class="p-0">
							<img
								src="https://images2.imgbox.com/f6/7b/8vmQq2qJ_o.png"
								class="w-100 mb-3"
								style="max-width: 30px;"
							>
						</BCol>

						<!-- ZELLE -->
						<BCol cols="2" class="p-0">
							<img
								src="https://images2.imgbox.com/11/43/BbmYYRYl_o.png"
								class="w-100 mb-3"
								style="max-width: 30px;"
							>
						</BCol>

						<!-- PAYPAL -->
						<BCol cols="2" class="p-0 text-center">
							<img
								src="https://images2.imgbox.com/d5/d9/xCqPYuvs_o.png"
								class="w-100"
								style="max-width: 30px;"
							>
						</BCol>

						<!-- BITCOIN -->
						<BCol cols="2" class="p-0 text-center">
							<img
								src="https://images2.imgbox.com/52/83/KeSUdDU3_o.png"
								class="w-100"
								style="max-width: 30px;"
							>
						</BCol>

						<!-- ETHEREUM -->
						<BCol cols="2" class="p-0 text-center">
							<img
								src="https://images2.imgbox.com/dd/b6/SDdDcGNU_o.png"
								class="w-100"
								style="max-width: 30px;"
							>
						</BCol>

					</BRow>
				</BCol>

				<BCol cols="12" sm="4" class="d-none text-center" data-aos="fade-up">
					
				</BCol>

				<BCol cols="12" class="my-3 text-center">
					<hr>
					<h6 class="text-secondary">
						© w3st.io {{ new Date().getFullYear() }}
					</h6>
					<br><br><br><br><br>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug.vue'
	import companyInfo from '@/defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},

		components: {
			SocialMediaPlug
		},
	}
</script>

<style scoped>
	* { color: white; }
</style>