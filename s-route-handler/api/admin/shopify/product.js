// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


const api_shopify = require('../../../../s-api/shopify/product')


// [INIT] //
const location = ''


module.exports = {
	deleteAll: async ({ req }) => {
		try {
			const result = await api_shopify.a_listAll()

			console.log(`Attempting to delete ${result.allProducts.length} products..`)

			for (let i = 0; i < result.allProducts.length; i++) {
				const product = result.allProducts[i]

				console.log(`${i + 1}/${result.allProducts.length}:`, product.id)

				await api_shopify.a_delete(product.id)
			}

			return {
				executed: true,
				status: true,
				location: location,
				message: 'All products deleted'
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `RH: Caught Error --> ${err}`,
			}
		}
	},
}