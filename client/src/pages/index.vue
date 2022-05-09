<template>
	<BRow class="m-0 bg-white">
		<BCol cols="12" sm="1" md="3" lg="4"></BCol>

		<BCol cols="12" sm="10" md="6" lg="4">
			<div class="logo-container">
				<div class="w-100 text-center vertical-center">
					<img :src="logo" class="w-100 px-5" style="max-width: 450px;">
				</div>
			</div>

			<div class="fixed-bottom px-1 py-1">
				<BAlert
					variant="info"
					fade
					:show="showDismissibleAlert"
					class="text-center mx-auto"
					style="max-width: 500px;"
				>
					<h6 class="">We are currently only taking appointments</h6>
					<BButton
						variant="success"
						size="sm"
						@click="showDismissibleAlert = false"
						class="mx-3 my-0"
					>Got It ✓</BButton>
				</BAlert>
			</div>
		</BCol>

		<BCol cols="12" sm="1" md="3" lg="4"></BCol>
	</BRow>
</template>

<script>
	export default {
		data() {
			return {
				logo: require('../assets/logo.svg'),
				showDismissibleAlert: true,
			}
		},

		components: {
			//JJLogo,
		},

		created() {
			this.$store.state.isHomePage = true
		},

		destroyed() {
			this.$store.state.isHomePage = false
		}
	}
</script>

<style lang="scss" scoped>
	.logo-container {
		position: relative;
		height: 100vh;
	}

	.vertical-center {
		position: absolute;
		top: 38%;
		transform: translateY(-30%);
	}
</style>