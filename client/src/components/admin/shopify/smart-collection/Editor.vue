<template>
	<BCard no-body class="h-100">
		<BCardHeader class="">
			<h6 class="m-0 text-primary text-bold">
				{{ c.handle }}
			</h6>
		</BCardHeader>

		<BCardBody v-if="!loading">
			<BRow class="mb-2 small text-bold">
				<BCol cols="12">
					<h6 class="text-primary text-bold">
						Title
					</h6>

					<input
						v-model="c.title"
						class="mb-3 form-control text-bold"
					/>
				</BCol>

				<BCol cols="12">
					<h6 class="text-primary text-bold">
						Rules
					</h6>
				</BCol>

				<BCol cols="3">
					<h6 class="small">
						Column
					</h6>
				</BCol>

				<BCol cols="3">
					<h6 class="small">
						Relation
					</h6>
				</BCol>

				<BCol cols="4">
					<h6 class="small">
						Condition
					</h6>
				</BCol>

				<BCol cols="2">
					<h6 class="small">
						Remove
					</h6>
				</BCol>
			</BRow>
		
			<BRow
				v-for="(r, ii) in c.rules"
				:key="ii"
				class="mb-2"
			>
				<BCol cols="3">
					<!-- Relation -->
					<BFormSelect
						v-model="r.column"
						:options="collectionsEditor.columns"
						size=""
						class=""
					/>
				</BCol>

				<BCol cols="3">
					<!-- Relation -->
					<BFormSelect
						v-model="r.relation"
						:options="collectionsEditor.options.tag"
						size=""
						class=""
					/>
				</BCol>

				<BCol cols="4">
					<input
						v-model="r.condition"
						type="text"
						class="form-control"
					>
				</BCol>

				<BCol cols="2">
					<BButton
						variant="danger"
						class="w-100"
						size="sm"
						pill
						@click="removeRule(ii)"
					>X</BButton>
				</BCol>
			</BRow>

			<BRow class="mb-2">
				<BCol cols="12">
					<BButton
						variant="success"
						class="w-100"
						pill
						size="sm"
						@click="addRule()"
					>+ Add Rule</BButton>
				</BCol>
			</BRow>
		</BCardBody>

		<BCardbody v-if="loading">
			<h4 class="text-center text-warning">Loading..</h4>
		</BCardbody>

		<BCardbody v-if="error">
			<h6 class="text-center text-danger">{{ error }}</h6>
		</BCardbody>


		<BCardFooter>
			<BButton
				variant="primary"
				pill
				class="w-100"
				@click="updateCollection()"
			>Update - {{ c.id }}</BButton>
		</BCardFooter>
	</BCard>
</template>

<script>
	import d_shopify from '../../../../defaults/shopify'
	import ShopifyService from '../../../../services/admin/ShopifyService'

	export default {
		props: ['c'],

		model: {
			prop: 'c',
		},

		data() {
			return {
				loading: true,
				collectionsEditor: d_shopify.collectionsEditor,
				resData: {},
				error: '',
			}
		},

		methods: {
			async updateCollection() {
				this.loading = true

				this.resData = await ShopifyService.s_smartCollections_update({
					id: this.c.id,
					params: {
						title: this.c.title,
						rules: this.c.rules
					},
				})

				if (this.resData.status) {
					this.error = ''
				}
				else { this.error = this.resData.message }

				this.loading = false
			},

			addRule() {
				this.c.rules.push({
					column: 'tag',
					relation: 'equals',
					condition: '',
				})
			},


			removeRule(i) {
				this.c.rules.splice(i, 1)
			}
		},

		created() {
			this.loading = false
		},
	}
</script>