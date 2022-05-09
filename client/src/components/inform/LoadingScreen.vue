<template>
	<div class="bg-primary text-center component">
		<img :src="logo" alt="" class="w-100 mt-5" style="max-width: 500px;">
		
		<div class="text-center loader">
			<LoaderIcon size="100" class="text-light rotating" />
		</div>
	</div>
</template>

<script>
	import { LoaderIcon } from 'vue-feather-icons'

	export default {
		components: {
			LoaderIcon,
		},

		mounted () {
			document.body.classList.add('loading-no-scroll')
		},

		destroyed () {
			document.body.classList.remove('loading-no-scroll')
		},

		data() {
			return {
				logo: require('../../assets/media/company/logo.png')
			}
		},
	}
</script>

<style lang="scss" scoped>
	@keyframes rotating {
		from {
			transform: rotate(0deg);
			-o-transform: rotate(0deg);
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
			-o-transform: rotate(360deg);
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
		}
    }

	@-webkit-keyframes rotating {
		from {
			transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
		}
	}

	.rotating {
		-webkit-animation: rotating 2s linear infinite;
		-moz-animation: rotating 2s linear infinite;
		-ms-animation: rotating 2s linear infinite;
		-o-animation: rotating 2s linear infinite;
		animation: rotating 2s linear infinite;
	}

	.component {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100000;
		height: 100vh;
		width: 100%;
	}

	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -50px;
		margin-left: -50px;
		width: 100px;
		height: 100px;
	}
</style>