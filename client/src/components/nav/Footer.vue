<template>
	<div class="w-100 bg-secondary">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade" data-aos-once="true">
					<RouterLink to="/" class="text-decoration-none">
						<h4 class="m-0 text-tertiary text-spread text-uppercase font-weight-bold">
							{{ companyInfo.companyName }}
						</h4>
						<h6 v-html="companyInfo.companyCaption1" class="text-tertiary small">
						</h6>
					</RouterLink>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up" data-aos-once="true">
					<h4 class="text-black">Follow Us</h4>
					<SocialMediaPlug variant="tertiary" />
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up" data-aos-once="true">
					<h4 class="text-black">Menu</h4>
					<ul class="list-unstyled text-small">
						<li v-for="(link, i) in pageLinks" :key="i">
							<RouterLink :to="link.path" class="text-white">
								<span v-if="link.text">{{ link.text }}</span>
								<span v-else v-html="link.navIcon"></span>
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up" data-aos-once="true">
					<h4 class="text-black">Contact</h4>
					<div class="contact-info">
						<h5 class="font-weight-bold">
							Email
						</h5>
						<h6 class="font-weight-bold">
							<a :href="companyInfo.emailLink" class="text-light">
								{{ companyInfo.email }}
							</a>
						</h6>
					</div>
				</BCol>

				<BCol cols="12" class="my-3 text-center">
					<h6 class="">
						<a href="https://www.w3st.io" target="_blank" class="text-secondary">
						© w3st.io {{ new Date().getFullYear() }}
						</a>
					</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'


	export default {
		components: {
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.contact-info i {
		display: block;
		float: left;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #ffffff;
		font-size: 30px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		border-radius: 50%;
		margin-right: 20px;
	}
</style>