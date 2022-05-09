<template>
	<BCard no-body class="">
		<BCardHeader class="bg-primary">
			<h4 class="m-0 text-light">Enter Rules Manually</h4>
		</BCardHeader>

		<BCardBody>
			<h6 class="text-primary text-bold">title</h6>
			
			<input
				v-model="collection.title"
				type="text"
				placeholder="Title of Smart Collection"
				class="mb-3 form-control"
			>
			<hr>

			<BRow class="mb-3">
				<BCol cols="12">
					<h6 class="text-primary text-bold">Rules</h6>
				</BCol>

				<BCol cols="4">
					<span class="">Column</span>
				</BCol>

				<BCol cols="4">
					<span class="">Relation</span>
				</BCol>

				<BCol cols="4">
					<span class="">Condition</span>
				</BCol>
			</BRow>
		
			<BRow
				v-for="(r, i) in collection.rules"
				:key="i"
				class="mb-3"
			>
				<BCol cols="4">
					<!-- Relation -->
					<BFormSelect
						v-model="r.column"
						:options="collectionsEditor.columns"
					/>
				</BCol>

				<BCol cols="4">
					<!-- Relation -->
					<BFormSelect
						v-model="r.relation"
						:options="collectionsEditor.options.tag"
					/>
				</BCol>

				<BCol cols="4">
					<BFormInput
						v-model="r.condition"
						type="text"
						placeholder="Artist Name, Genre, etc."
					/>
				</BCol>
			</BRow>

			<BRow>
				<BCol cols="12" class="text-center">
					<BButton
						variant="outline-success"
						pill
						size="sm"
						class="mb-3"
						@click="createRule()"
					>+ Add Rule</BButton>
				</BCol>
			</BRow>
		</BCardBody>
		
		<BCardFooter>
			<BButton
				variant="success"
				pill
				size="lg"
				class="w-100"
				:disabled="submitted"
				@click="createCollection()"
			>Create Smart Colleciton</BButton>

			<h6 v-if="success" class="my-1 text-success">Created Collection!</h6>
			<h6 v-if="error" class="my-1 text-danger">{{ error }}</h6>
		</BCardFooter>
	</BCard>
</template>

<script>
	import d_shopify from '../../../../defaults/shopify'
	import ShopifyService from '../../../../services/admin/ShopifyService'

	export default {
		data() {
			return {
				collectionsEditor: d_shopify.collectionsEditor,

				collection: {
					title: '',
					rules: [
						{
							column: 'tag',
							relation: 'equals',
							condition: '',
						}
					]
				},

				submitted: false,
				success: false,
				result: {},
				error: '',
			}
		},

		methods: {
			createRule() {
				this.collection.rules.push({
					column: 'tag',
					relation: 'equals',
					condition: '',
				})
			},


			async createCollection() {
				this.submitted = true

				this.resData = await ShopifyService.s_smartCollections_create({
					collection: this.collection
				})

				if (this.resData.status) {
					this.success = true
					this.error = ''

					this.result = this.resData.result
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