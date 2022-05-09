<template>
	<BRow>
		<BCol cols="12">
			<h1 class="text-center">
				<LoaderIcon class="text-primary rotating" size="2x" />
			</h1>
		</BCol>
	</BRow>
</template>

<script>
import { LoaderIcon } from 'vue-feather-icons'

export default {
	components: {
		LoaderIcon
	},
}
</script>

<style scoped>
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
</style>