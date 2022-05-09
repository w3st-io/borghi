<template>
	<div>
		<BRow :class="`text-${textAlign}`" style="max-width: 200px;">
			<BCol cols="8" class="p-0 text-center">
				<a :href="defaultData.instagramLink" target="_blank" :class="`text-${variant}`">
					<InstagramIcon :size="size" class="mr-3" />
				</a>
			</BCol>

			<BCol cols="4" class="p-0 text-left">
				<a
					:href="defaultData.discogsLink"
					class="text-left"
					target="blank"
				>
					<img
						:src="vinylImg"
						alt=""
						class=" rotate"
						style="height: 34px;"
					>
				</a>
			</BCol>
		</BRow>		
	</div>
</template>

<script>
	// [IMPORT] //
	import { InstagramIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import defaultData from '@/defaults/companyInfo'

	export default {
		props: {
			size: {
				type: String,
				default: '24',
			},

			variant: {
				type: String,
				default: 'light'
			},

			textAlign: {
				type: String,
				default: 'center'
			},
		},

		components: {
			InstagramIcon,
		},
		
		data() {
			return {
				defaultData: defaultData,
				vinylImg: require('../../assets/vinyl.png')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.rotate {
		-webkit-animation:spin 4s linear infinite;
		-moz-animation:spin 4s linear infinite;
		animation:spin 4s linear infinite;
	}
	@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
	@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
	@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }	
</style>