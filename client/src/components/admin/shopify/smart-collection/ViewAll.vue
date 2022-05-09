<template>
	<BCard no-body class="">
		<BCardHeader class="bg-primary">
			<BRow>
				<BCol cols="4">
					<h5 class="text-light m-0">
						Total: {{ collectionCount }}
					</h5>
				</BCol>

				<BCol cols="4">
					<!-- Pagination -->
					<nav>
						<ul class="small m-0 pagination justify-content-center">
							<li class="page-item">
								<span
									class="page-link"
									@click="$emit('pagination', 'previous')"
								>⟵</span>
							</li>
							<li class="page-item disabled">
								<a class="page-link" href="#">{{ page }}</a>
							</li>
							<li class="page-item">
								<span
									class="page-link"
									@click="$emit('pagination', 'next')"
								>⟶</span>
							</li>
						</ul>
					</nav>
				</BCol>

				<BCol cols="4">
					<h5 class="text-right text-light m-0">
						Page Count: {{ maxPages }}
					</h5>
				</BCol>
			</BRow>
		</BCardHeader>

		<BCardBody v-if="!loading">
			<BRow>
				<BCol
					cols="12" lg="6"
					v-for="(c, i) in collections"
					:key="i"
					class="pb-4 align-items-stretch"
				>
					<Editor v-model="collections[i]" />				
				</BCol>
			</BRow>
		</BCardBody>

		<BCardBody v-if="loading">
			<h1 class="m-0 text-center text-warning">Loading..</h1>
		</BCardBody>
	</BCard>
</template>

<script>
	import d_shopify from '../../../../defaults/shopify'
	import Editor from './Editor'

	export default {
		components: { Editor },

		props: {
			collections: {
				required: true,
			},
			
			collectionCount: {
				required: true,
			},

			maxPages: {
				required: true,
			},
			
			page: {
				required: true,
			},
			
			loading: {
				required: true,
			},
		},

		data() {
			return {
				collectionsEditor: d_shopify.collectionsEditor
			}
		},
	}
</script>