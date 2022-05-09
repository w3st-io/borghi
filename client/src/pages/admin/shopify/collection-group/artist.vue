<template>
	<BContainer class="py-5">
		<h3 class="text-primary">Artist - Collection Group Manager</h3>

		<BTabs pills>
			<!-- Current Collections -->
			<BTab title="Read Current" active>
				<Read :title="'Artist'" />
			</BTab>

			<!-- Current Collections -->
			<BTab title="Create">
				<Creator :title="'Artist'" />
			</BTab>

			<!-- Current Collections -->
			<BTab title="Update">
				<Updater
					:title="'Artist'"
					:columnName="'artist'"
				/>
			</BTab>
		</BTabs>
	</BContainer>
</template>

<script>
	import Creator from '@/components/admin/shopify/collection-group/Creator'
	import Updater from '@/components/admin/shopify/collection-group/Updater'
	import Read from '@/components/admin/shopify/collection-group/Read'

	export default {
		components: {
			Creator,
			Updater,
			Read
		},
	}
</script>