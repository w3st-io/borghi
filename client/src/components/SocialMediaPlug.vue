<template>
	<div :class="`text-${textAlign}`">
		<a :href="defaultData.instagramLink" target="_blank" :class="`text-${variant}`">
			<InstagramIcon :size="size" class="mr-3" />
		</a>
	</div>
</template>

<script>
	// [IMPORT] //
	import { InstagramIcon, } from 'vue-feather-icons'

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
			}
		},
	}
</script>