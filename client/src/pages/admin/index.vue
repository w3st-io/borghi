<template>
	<BContainer class="my-5">
		<BRow v-if="!loading" class="text-light">
			<BCol cols="12">
				<BCard bg-variant="light" text-variant="dark" class="mb-5" no-body>
					<BCardHeader class="bg-warning">
						<h3 class="m-0">Admin Dashboard</h3>
					</BCardHeader>

					<BCardBody>
						<FunctionButtons />
					</BCardBody>
				</BCard>
			</BCol>
		</BRow>

		<!-- [LOADING] -->
		<BRow v-if="loading" class="mb-5">
			<BCol cols="12">
				<Alert variant="dark" class="m-0" />
			</BCol>
		</BRow>

		<!-- [ERROR] -->
		<BRow v-if="error" class="mb-5">
			<BCol cols="12">
				<Alert variant="danger" :message="error" />
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import FunctionButtons from '@/components/admin/FunctionButtons'
	import Alert from '@/components/inform/Alert'
	import router from '@/router'
	import PageService from '@/services/PageService'

	// [EXPORT] //
	export default {
		components: {
			FunctionButtons,
			Alert,
		},

		data() {
			return {
				returned: {},
				loading: true,
				error: '',
			}
		},

		methods: {
			switchTab(tabClicked) { this.activeTab = tabClicked },
			
			async getPageData() {
				try {
					this.returned = await PageService.s_admin()
				}
				catch (err) {this.error = err }
			},
		},

		async created() {
			// [REDIRECT] Not Admin Log Required //
			if (!localStorage.admintoken) { router.push({ name: 'admin_login' }) }

			await this.getPageData()

			this.loading = false
		},
	}
</script>