<template>
	<BContainer class="py-5">
		<BRow>
			<BCol cols="12">
				<h3 class="text-primary">Collection Group Manager</h3>
			</BCol>

			<BCol cols="12" md="6">
				<RouterLink to="/admin/shopify/collection-group/artist">
					<BButton
						variant="primary"
						pill
						size="lg"
						class="w-100"
					>Artist</BButton>
				</RouterLink>
			</BCol>

			<BCol cols="12" md="6">
				<RouterLink to="/admin/shopify/collection-group/genre">
					<BButton
						variant="primary"
						pill
						size="lg"
						class="w-100"
					>Genre</BButton>
				</RouterLink>
			</BCol>
		</BRow>
	</BContainer>
</template>