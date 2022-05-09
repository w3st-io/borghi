// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


const api_shopify = require('../../../../../s-api/shopify/product')


// [INIT] //
const location = ''


module.exports = async ({ req }) => {
	try {
		const result = await api_shopify.a_listAll()

		return {
			executed: true,
			status: true,
			allProducts: result.allProducts,
			message: 'All your products'
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
}