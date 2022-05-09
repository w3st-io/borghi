<template>
	<div v-if="loading == false" class="background-img">
		<div class="" style="height: 100vh;"></div>
		<!-- INFO -->
		<ContactInfo />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import ContactInfo from '@/components/ContactInfo'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			ContactInfo,
		},

		data() {
			return {
				loading: true,

				pageData: pageData,
				reqData: {},
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
				services: [],
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
		background-image: url('../assets/images/image.jpg');
	}

	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>
