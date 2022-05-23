<template>
<div class="pt-5">
	<BContainer fluid class="m-0 p-0 pt-5 bg-tertiary">
		<ContactInfo v-if="true" />

		<div class="py-5 bg-secondary">
			<h3 class="text-center text-tertiary font-weight-bold">Contact</h3>
			<BContainer class="mx-auto pb-5" style="max-width: 800px;">
				<h5 class="text-tertiary font-weight-bold">Your Email Address</h5>
				<input v-model="email.address" name="email" type="text" class="form-control mb-4">

				<h5 class="text-tertiary font-weight-bold">Your Name</h5>
				<input v-model="email.name" name="name" type="text" class="form-control mb-4">

				<h5 class="text-tertiary font-weight-bold">Subject</h5>
				<input v-model="email.subject" name="subject" type="text" class="form-control mb-4">

				<h5 class="text-tertiary font-weight-bold">Message</h5>
				<textarea v-model="email.message" name="message" rows="10" class="w-100 mb-4 form-control"></textarea>

				<BButton
					variant="tertiary"
					class="w-100"
					@click="send()"
				>Send</BButton>
				<hr>
				{{ this.resData }}
			</BContainer>
		</div>
	</BContainer>
</div>
</template>

<script>
	// [IMPORT] Personal //
	import ContactInfo from '@/components/ContactInfo'
	import DPage from '@/defaults/pages/directions'
	import serviceApiMail from '../services/api/mail'

	export default {
		components: {
			ContactInfo,
		},

		data() {
			return {
				resData: {},

				DPage: DPage,

				email: {
					address: '',
					name: '',
					subject: '',
					message: '',
				},
			}
		},

		methods: {
			async send() {
				this.resData = await serviceApiMail.s_sendEmail({
					email: this.email
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/bootstrap-override.scss';
	
	.form-control {
		@extend .bg-secondary;
		@extend .border-primary;
		@extend .text-light;
	}
</style>