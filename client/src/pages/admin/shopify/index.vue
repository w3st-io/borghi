<template>
	<BContainer class="py-5">
		<BCard no-body class="shadow">
			<BCardHeader class="bg-primary">
				<h4 class="m-0 text-light">Shopify Store</h4>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" md="6" lg="4">
						<h6 class="text-center text-primary text-bold">Orders</h6>
						<RouterLink to="/admin/shopify/orders/50/1">
							<BButton
								variant="primary"
								pill
								class="mb-3 w-100"
							>View</BButton>
						</RouterLink>
					</BCol>

					<BCol cols="12" md="6" lg="4" class="">
						<h6 class="text-center text-primary text-bold">Products</h6>
						<RouterLink to="/admin/shopify/product/analyze">
							<BButton
								variant="primary"
								pill
								class="mb-3 w-100"
							>Analytics</BButton>
						</RouterLink>
						
						<RouterLink to="/admin/shopify/product/manage">
							<BButton
								variant="primary"
								pill
								class="mb-3 w-100"
							>Manage</BButton>
						</RouterLink>
					</BCol>

					<BCol cols="12" md="6" lg="4">
						<h6 class="text-center text-primary text-bold">Smart Collections</h6>
						<RouterLink to="/admin/shopify/smart-collection/50/1">
							<BButton
								variant="primary"
								pill
								class="mb-3 w-100"
							>Manage</BButton>
						</RouterLink>
					</BCol>

					<BCol cols="12" md="6" lg="4">
						<h6 class="text-center text-primary text-bold">Collection Group</h6>
						<RouterLink to="/admin/shopify/collection-group">
							<BButton
								variant="primary"
								pill
								class="w-100"
							>View</BButton>
						</RouterLink>
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>