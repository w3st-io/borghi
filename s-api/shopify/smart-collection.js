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
	a_create: async ({ title, rules }) => {
		try {
			// [API][SHOPIFY] //
			const result = await shopify.smartCollection.create({
				title,
				rules
			})

			return {
				executed: true,
				status: true,
				location: location,
				createdSmartCollection: result,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: err,
			}
		}
	},


	a_list_all: async () => {
		try {
			// [INIT] //
			let collections = []
			let params = { limit: 50 }
			
			const collectionCount = await shopify.smartCollection.count()


			// [DO] While there is another page after //
			do {
				const collection = await shopify.smartCollection.list(params) || []

				// [FOR-EACH[PUSH] //
				for (let i = 0; i < collection.length; i++) {
					collections.push(collection[i])
				}
			
				params = collection.nextPageParameters
		
			} while (params !== undefined)

			return {
				executed: true,
				status: true,
				location: location,
				collectionCount: collectionCount,
				collections: collections,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location} - smartCollections: Error --> ${err}`
			}
		}
	},

	a_list_paginated: async ({ limit, page }) => {
		try {
			if (page <= 0) {
				return {
					executed: true,
					status: false,
					location: location,
					message: 'Invalid page'
				}
			}

			// [INIT] //
			let collections

			// [COUNT] //
			const collectionCount = await shopify.smartCollection.count()
			
			// [CALCULATE] maxPages //
			const maxPages = Math.ceil(collectionCount / limit)
			
			// [WHILE] index is not page, not maxPages, & no next page //
			let i = 0
			let params = { limit: limit }
			while (i < page && i !== maxPages && params) {
				// [API][SHOPIFY] //
				collections = await shopify.smartCollection.list(params)
			
				// [PAGINATION-NEXT] //
				params = collections.nextPageParameters
				
				// [INCREMENT] //
				i++
			}

			return {
				executed: true,
				status: true,
				limit: limit,
				page: page,
				collectionCount: collectionCount,
				maxPages: maxPages,
				collections: collections
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location} - smartCollections: Error --> ${err}`
			}
		}
	},

	a_update: async ({ id, params }) => {
		try {
			// [API][SHOPIFY] //
			const result = await shopify.smartCollection.update(id, params)

			return {
				executed: true,
				status: true,
				location: location,
				createdSmartCollection: result,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: err,
			}
		}
	},

	a_delete: async ({ id }) => {
		try {
			// [API][SHOPIFY] //
			const deletedSmartCollection = await shopify.smartCollection.delete(id)

			return {
				deletedSmartCollection: deletedSmartCollection,
			}
		}
		catch (err) {
			console.log('ERR', err);
		}
	},
}