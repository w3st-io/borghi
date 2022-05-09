<template>
	<BCard no-body class="">
		<BCardHeader class="bg-primary">
			<h4 class="m-0 text-light">
				Create Collection Group - {{ title }}
			</h4>
		</BCardHeader>

		<!-- Generate and Day Count -->
		<BCardBody>
			<p class="m-0 text-dark">{{ explanation }}</p>
		</BCardBody>

		<BCardFooter>
			<BRow>
				<BCol md="12" class="mb-1">
					<!-- [SUBMIT] Autmatic Labels -->
					<BButton
						class="w-100 my-2"
						variant="success"
						pill
						size="lg"
						:disabled="submitted"
						@click="collectionsGroup_createOne()"
					>Create Collection Group for Artist</BButton>

					<!-- [SUCCESS] -->
					<h6 v-if="success" class="my-1 text-success">
						Created!
					</h6>

					<!-- [ERROR] -->
					<h6 v-if="error" class="my-1 text-danger">{{ error }}</h6>
				</BCol>
			</BRow>
		</BCardFooter>
	</BCard>
</template>

<script>
	// [IMPORT] Personal //
	import CollectionGroupService from '@/services/admin/shopify/CollectionGroupService'

	export default {
		props: {
			title: {
				type: String,
				required: true,
			},
		},

		data() {
			return {
				explanation: 'Create Collection Group for Artist Collections',
				
				artist: {
					JSONData: [],
					cache: [],
				},

				submitted: false,
				success: false,
				error: '',
			}
		},

		methods: {
			async collectionsGroup_createOne() {
				this.submitted = true

				this.resData = await CollectionGroupService.s_createOne({
					title: this.title
				})

				if (this.resData.status) {
					this.success = true
					this.error = ''

					this.artist.cache = this.resData.cache
				}
				else {
					this.success = false
					this.error = this.resData.message
				}

				this.submitted = false
			},
		},
	}
</script>