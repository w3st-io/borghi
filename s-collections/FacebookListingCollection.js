/**
 * %%%%%%%%%%%%%%%%%%%%%%%%% *
 * %%% TWEETS COLLECTION %%% *
 * %%%%%%%%%%%%%%%%%%%%%%%%% *
 * 
 * Timeline Example (X: time)
 * <----(timePointA)-----(timePointB)---->
*/
// [REQUIRE] Personal //
const FacebookListingModel = require('../s-models/FacebookListingModel')


// [INIT] //
const location = '/s-collections/FacebookListingCollection'


module.exports = {
	/*** [CRUD] ***/
	readAll_sorted: async ({ sort }) => {
		try {
			// [SANITIZE] //
			sort = parseInt(sort)

			// [VALIDATE] sort //
			if (!Number.isInteger(sort)) {
				return {
					executed: true,
					status: false,
					message: `${location}: Invalid sort`,
				}
			}

			if (sort == 0) { sort = {} }
			else if (sort == 1) { sort = { createdAt: -1 } }

			const fbl = await FacebookListingModel.find()
				.sort(sort)
				.exec()

			return {
				executed: true,
				status: true,
				facebookListings: fbl
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


	/*** [CRUD-OTHER] ***/
	storeFBListing: async (fBlisting) => {
		try {
			// [CHECK-DUPLICATE] //
			const search = await FacebookListingModel.findOne(fBlisting)

			if (!search) {
				const listingsCount = await FacebookListingModel.estimatedDocumentCount()

				if (listingsCount > 300) { await FacebookListingModel.deleteOne() }

				const listing = await new FacebookListingModel(fBlisting).save()
			}
	
			return {
				executed: true,
				status: true,
				location: location,
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
}