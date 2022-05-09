<template>
	<BContainer class="py-5">
		<BCard no-body class="shadow">
			<BCardHeader class="bg-primary">
				<h1 class="m-0 text-center text-light">Orders</h1>
			</BCardHeader>

			<!-- Generate and Day Count -->
			<BCardBody class="bg-lite">
				<BRow>
					<BCol md="9">
						<BButton
							:disabled="loading"
							variant="success"
							pill
							class="w-100 mb-3 mb-md-0"
							@click="downloadOrdersSheet()"
						>Generate Order Report</BButton>
					</BCol>

					<BCol md="3">
						<BInputGroup class="w-100">
							<BFormInput
								v-model="daysAgo"
								placeholder="Search Days Back"
							></BFormInput>

							<BInputGroupAppend>
								<BButton
									variant="success"
									@click="getPageData()"
								>Refresh</BButton>
							</BInputGroupAppend>
						</BInputGroup>
					</BCol>
				</BRow>
			</BCardBody>

			<!-- Orders -->
			<BCardBody
				v-for="(o, i) in orders"
				:key="i"
				:class="{ 'bg-lite': isOdd(i) }"
			>
				<BRow>
					<!-- Orders -->
					<BCol md="6" class="">
						<h6 class="text-primary">
							{{ o.id }}
						</h6>
					</BCol>

					<!-- Orders -->
					<BCol md="6" class="">
						<h6 class="text-right text-primary">
							{{ new Date(o.created).toLocaleString() }}
						</h6>
					</BCol>

					<BCol md="12"><hr></BCol>

					<BCol md="6" class="pb-3">
						<BButton
							variant="success"
							class="w-100"
							pill
							@click="copyToClipboard(extractAddress(o.shipping_address))"
						>Copy Address</BButton>
					</BCol>

					<BCol md="6" class="pb-3">
						<BButton
							variant="success"
							class="w-100"
							pill
							@click="copyToClipboard(o.buyer.email)"
						>Copy Email</BButton>
					</BCol>
					
					<!-- Buyer Address -->
					<BCol cols="12" md="6" class="pb-3">
						<h6 class="text-primary">Address</h6>
						<h6>{{ extractAddress(o.shipping_address) }}</h6>
					</BCol>

					<!-- Buyer -->
					<BCol cols="12" md="6" class="pb-3">
						<h6 class="text-primary">Buyer</h6>
						<h6>Username: {{ o.buyer.username }}</h6>
						<h6>Email: {{ o.buyer.email }}</h6>
						<h6>Name: {{ extractName(o.shipping_address) }}</h6>
					</BCol>

					<BCol md="12"><hr></BCol>

					<BCol cols="12" md="6">
						<h6 class="m-0 text-primary">
							({{ o.items.length }}) Items to Be Shipped
						</h6>
					</BCol>

					<BCol cols="12" md="6">
						<h6 class="m-0 text-right">
							<b>Total Value: ${{ calculateTotalValue(o.items) }}</b>
						</h6>
					</BCol>

					<BCol md="12"><hr></BCol>

					<BCol cols="12" class="pb-3">
						<!-- Items -->
						<BRow class="">
							<BCol cols="1">
								<h6 class="mb-1 text-bold">Order #</h6>
							</BCol>

							<BCol cols="2">
								<h6 class="mb-1 text-bold">Listing Id</h6>
							</BCol>

							<BCol cols="2">
								<h6 class="mb-1 text-bold">Location</h6>
							</BCol>
							
							<BCol cols="5">
								<h6 class="mb-1 text-bold">Description</h6>
							</BCol>

							<BCol cols="1">
								<h6 class="mb-1 text-bold">Price</h6>
							</BCol>
						</BRow>

						<BRow
							v-for="(item, ii) in o.items"
							:key="ii"
						>
							<BCol cols="1">
								<h6 class="my-1">{{ ii + 1 }}.</h6>
							</BCol>

							<BCol cols="2">
								<h6 class="my-1">{{ item.id }}</h6>
							</BCol>

							<BCol cols="2">
								<h6 class="my-1">{{ item.item_location }}</h6>
							</BCol>
							
							<BCol cols="5">
								<h6 class="my-1">{{ item.release.description }}</h6>
							</BCol>

							<BCol cols="1">
								<h6 class="my-1">${{ item.price.value }}</h6>
							</BCol>
						</BRow>
					</BCol>
				</BRow>
			</BCardBody>

			<BCardBody v-if="!loading && orders.length == 0">
				<h3 class="m-0 text-secondary">
					No orders found in the past {{ daysAgo }} days
				</h3>
			</BCardBody>

			<BCardBody v-if="loading">
				<h1 class="m-0 text-center text-warning">Loading..</h1>
			</BCardBody>

			<BCardBody v-if="error">
				<h6 class="m-0 text-danger">{{ error }}</h6>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
import OrdersService from '../services/admin/OrdersService'

export default {
	data() {
		return {
			loading: true,
			resData: {},

			orders: [],
			daysAgo: 5,

			error: '',
		}
	},

	async created() {
		await this.getPageData()
	},

	methods: {
		async getPageData() {
			this.loading = true

			this.resData = await OrdersService.s_getOrders({
				daysAgo: this.daysAgo
			})

			if (this.resData.status) {
				this.orders = this.resData.orders
			}
			else {
				this.error = this.resData.message
			}

			this.loading = false
		},

		nthIndex(str, s, n) {
			var i = -1

			while (n-- && i++ < str.length) {
				i = str.indexOf(s, i)

				if (i < 0) { break }
			}

			return i
		},

		isOdd(i) {
			return ( i & 1 ) ? true : false;
		},

		copyToClipboard(c) {
			navigator.clipboard.writeText(c)
		},

		extractName(extractFrom) {
			const formattedShipToName = extractFrom.substr(
				0,
				extractFrom.indexOf('\n')
			)

			return formattedShipToName
		},

		extractAddress(address) {
			// addressStreet
			const formattedAddress = address.substring(
				0,
				this.nthIndex(address, '\n', 4)
			)

			return formattedAddress
		},

		calculateTotalValue(items) {
			let orderValue = 0
			for (let i = 0; i < items.length; i++) {
				const item = items[i]
				
				orderValue = orderValue + item.price.value
			}
			
			return orderValue
		},

		async downloadOrdersSheet() {
			await OrdersService.downloadOrdersSheet({ orders: this.orders })
		},
	}
}
</script>

<style scoped>
	.bg-lite {
		background: rgb(230, 230, 230);
	}

	.text-bold {
		font-weight: bold;
	}
</style>