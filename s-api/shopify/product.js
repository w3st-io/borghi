// [REQUIRE] //
const Shopify = require('shopify-api-node')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [SHOPIFY] //
const shopify = new Shopify({
	shopName: config.api.shopify.shopName,
	accessToken: config.api.shopify.accessToken,
})


// [INIT] //
const location = '/s-api/shopify'


module.exports = {
	a_listAll: async () => {
		try {
			// [INIT] //
			let allProducts = []
			let params = { limit: 50 }
			
			do {
				const products = await shopify.product.list(params)

				allProducts = allProducts.concat(products)
			
				params = products.nextPageParameters
			} while (params !== undefined)

			return {
				executed: true,
				status: true,
				allProducts,
			}
		}
		catch (err) {
			console.log(err)
			return {
				executed: false,
				status: false,
				location: location,
				message: err
			}
		}
	},

	a_delete: async (id) => {
		return {
			deletedProduct: await shopify.product.delete(id)
		}
	},
}