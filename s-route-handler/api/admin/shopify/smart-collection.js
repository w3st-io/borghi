// [REQUIRE] Personal //
const api_shopify = require('../../../../s-api/shopify/smart-collection')


// [INIT] //
const location = '/s-route-handler/api/admin/shopify'


// [DELAYER] //
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


module.exports = {
	rh_create: async ({ req }) => {
		// [API][SHOPIFY] Create Collection //
		return await api_shopify.a_create(req.body.collection)
	},


	rh_create_artist: async ({ req }) => {
		try {
			// [INIT] //
			let cache = {
				existantCollections: [],
				newlyCreatedCollection: [],
			}
	
			// [API][SHOPIFY] Get all collections //
			const collections = await api_shopify.a_list_all()
	
			// [ERROR] //
			if (!collections.status) { return collections }

			console.log('Current Collections Count:', collections.collections.length)
	
			// [FOR-EACH][LOAD] Existant Collections //
			for (let i = 0; i < collections.collections.length; i++) {
				cache.existantCollections.push(collections.collections[i].title)
			}

			// [FOR-EACH] //
			for (let i = 0; i < req.body.JSONData.length; i++) {
				const artist = req.body.JSONData[i].artist
	
				if (
					!cache.existantCollections.includes(artist) &&
					!cache.newlyCreatedCollection.includes(artist)
				) {
					// [DELAY] 1s//
					await delay(1000)

					// [API][SHOPIFY] Create Collection //
					const result = await api_shopify.a_create({
						title: `${artist}`,
						rules: [
							{
								column: 'tag',
								relation: 'equals',
								condition: `${artist}`
							},
							{
								column: 'tag',
								relation: 'equals',
								condition: 'media-Mint (M)'
							},
							{
								column: 'tag',
								relation: 'equals',
								condition: 'sleeve-Mint (M)'
							},
							{
								column: 'type',
								relation: 'not_equals',
								condition: 'Cass'
							}
						]
					})

					cache.newlyCreatedCollection.push(artist)

					console.log(result)
				}
			}
	
			return {
				executed: true,
				status: true,
				cache: cache,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `RH: Caught Error --> ${err}`,
			}
		}
	},


	rh_readAll: async ({ req }) => {
		return await api_shopify.a_list_all({
			limit: req.params.limit,
			page: req.params.page,
		})
	},


	rh_read_paginated: async ({ req }) => {
		return await api_shopify.a_list_paginated({
			limit: req.params.limit,
			page: req.params.page,
		})
	},


	rh_update: async ({ req }) => {
		// [API][SHOPIFY] Create Collection //
		return await api_shopify.a_update({
			id: req.body.id,
			params: req.body.params,
		})
	},


	rh_delete_all: async ({ req }) => {
		return {
			executed: true,
			status: true,
		}
	},
}