<template>
	<BContainer class="py-5">
		<h3 class="text-primary">Collection Group of Genre Collections Manager</h3>

		<BTabs pills>
			<!-- Current Collections -->
			<BTab title="Read Current" active>
				<Read :title="'Genre'" />
			</BTab>

			<!-- Current Collections -->
			<BTab title="Create">
				<Creator :title="'Genre'" />
			</BTab>

			<!-- Current Collections -->
			<BTab title="Update">
				<Updater
					:title="'Genre'"
					:columnName="'genre'"
				/>
			</BTab>
		</BTabs>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import Creator from '@/components/admin/shopify/collection-group/Creator'
	import Read from '@/components/admin/shopify/collection-group/Read'
	import Updater from '@/components/admin/shopify/collection-group/Updater'

	export default {
		components: {
			Creator,
			Read,
			Updater,
		},
	}
</script>