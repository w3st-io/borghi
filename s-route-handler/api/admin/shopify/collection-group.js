// [REQUIRE] //
const validator = require('validator')


// [REQUIRE] Personal //
const api_shopify = require('../../../../s-api/shopify/smart-collection')
const CollectionGroupCollection = require('../../../../s-collections/CollectionGroupCollection')


// [INIT] //
const location = ''


module.exports = {
	createOne: async ({ req }) => {
		try {
			console.log(req.body);
			// [VALIDATE] //
			if (!validator.isAscii(req.body.title)) {
				return {
					executed: true,
					status: false,
					location: location,
					message: 'Invalid Params'
				}
			}

			// [FIND-ONE] Check if already exists //
			const queryResult = await CollectionGroupCollection.c_findOne({
				query: {
					admin: req.admin_decoded.admin_id,
					title: req.body.title,
				}
			})
			
			// [PREVENT-DUPLICATE] //
			if (queryResult.collectionGroup) {
				return {
					executed: true,
					status: false,
					location: location,
					message: 'already exists'
				}
			}

			// [CREATE] //
			return await CollectionGroupCollection.c_create({
				title: req.body.title,
				admin: req.admin_decoded.admin_id,
			})
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


	findOne: async ({ req }) => {
		return await CollectionGroupCollection.c_findOne({
			query: {
				admin: req.admin_decoded.admin_id,
				title: req.params.title,
			},
		})
	},


	updateOne: async ({ req }) => {
		console.log(req.body);
		// [INIT] //
		let existantCollections = []
		let collectionGroup = []


		// [API][SHOPIFY] Get all collections //
		const collections = await api_shopify.a_list_all()
	
		// [ERROR] //
		if (!collections.status) { return collections }

		// [FOR-EACH][LOAD] Existant Collections //
		for (let i = 0; i < collections.collections.length; i++) {
			existantCollections.push(collections.collections[i])
		}

		for (let i = 0; i < req.body.JSONData.length; i++) {
			const artist = req.body.JSONData[i][req.body.columnName]

			// Check if collection with given artist exist
			existantCollections.some(collection => {
				if (collection.title === artist) {
					collectionGroup.push({
						id: collection.id,
						title: collection.title,
						handle: collection.handle,
					})
				}
			})
		}

		// alphabetize array of
		collectionGroup = collectionGroup.sort(
			(a, b) => (a.title > b.title) ? 1 : -1
		)

		await CollectionGroupCollection.c_updateOne({
			filter: {
				admin: req.admin_decoded.admin_id,
				title: req.body.title,
			},

			set: {
				collections: collectionGroup
			}
		})

		// [SUCCESS] //
		return {
			executed: true,
			status: true,
			location: location,
			message: 'collection group created',
			result: collectionGroup,
		}
	},
}