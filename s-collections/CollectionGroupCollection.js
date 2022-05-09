// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const CollectionGroupModel = require('../s-models/CollectionGroupModel')


// [INIT] //
const location = '/s-collections/CollectionGroupCollection'


module.exports = {
	/*** [CRUD] ***/
	c_create: async ({ admin, title }) => {
		try {
			const result = await new CollectionGroupModel({
				_id: mongoose.Types.ObjectId(),
				admin: admin,
				title: title,
			}).save()

			// [SUCCESS] //
			return {
				executed: true,
				status: true,
				location: location,
				message: 'Successfully created obj',
				result: result,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `${location}: Caught Error --> ${err}`,
			}
		}
	},

	c_findOne: async ({ query }) => {
		const result = await CollectionGroupModel.findOne(query)

		// [NOTHING-FOUND] //
		if (!result) {
			return {
				executed: true,
				status: false,
				location: location,
				message: 'No collection group found',
			}
		}

		return {
			executed: true,
			status: true,
			location: location,
			collectionGroup: result
		}
	},

	c_updateOne: async ({ filter, set }) => {
		const result = await CollectionGroupModel.updateOne(
			filter,
			{ $set: set },
		)

		return {
			executed: true,
			status: true,
			location: location,
			collectionGroup: result
		}
	},
}