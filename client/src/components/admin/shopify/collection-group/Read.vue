<template>
	<BCard no-body class="">
		<BCardHeader class="bg-primary">
			<h4 class="m-0 text-light">Reading Collection Group - {{ title }}</h4>
		</BCardHeader>

		<!-- Generate and Day Count -->
		<BCardBody v-if="!loading && !error">
			<BRow>
				<BCol cols="2">
					<h6 class="text-primary">Collection ID</h6>
				</BCol>
				<BCol cols="5">
					<h6 class="text-primary">Title</h6>
				</BCol>
				<BCol cols="5">
					<h6 class="text-primary">Handle</h6>
				</BCol>
			</BRow>

			<BRow
				v-for="(c, i) in collectionGroup.collections"
				:key="i"
			>
				<BCol cols="2">{{ c.id }}</BCol>
				<BCol cols="5">{{ c.title }}</BCol>
				<BCol cols="5">{{ c.handle }}</BCol>
			</BRow>
		</BCardBody>

		<BCardBody v-if="loading">
			<h4 class="m-0 text-warning">Loading..</h4>
		</BCardBody>

		<BCardBody v-if="error">
			<h6 class="text-danger">{{ error }}</h6>

			<div class="text-center">
				<BButton
					variant="outline-secondaruy"
				>Refresh</BButton>
			</div>
		</BCardBody>
	</BCard>
</template>

<script>
	// [IMPORT] Personal //
	import CollectionGroupService from '@/services/admin/shopify/CollectionGroupService'

	export default {
		props: {
			title: {
				required: true,
				type: String,
			},
		},

		data() {
			return {
				collectionGroup: {},

				loading: false,
				success: false,
				error: '',
			}
		},

		methods: {
			async collectionsGroup_findOne() {
				this.loading = true

				this.resData = await CollectionGroupService.s_findOne({
					title: this.title,
				})

				if (this.resData.status) {
					this.success = true
					this.error = ''

					this.collectionGroup = this.resData.collectionGroup
				}
				else {
					this.success = false
					this.error = this.resData.message
				}

				this.loading = false
			},
		},

		async created() {
			await this.collectionsGroup_findOne()
		},
	}
</script>