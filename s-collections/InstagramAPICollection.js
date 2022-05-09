// [REQUIRE] //
const mongoose = require('mongoose')


// [REQUIRE] Personal //
const InstagramAPIModel = require('../s-models/InstagramAPIModel')


const location = 'InstagramAPICollection'


module.exports = {
	/******************* [CRUD] *******************/
	// [CREATE] //
	c_create: async ({ access_token }) => {
		try {
			// [SAVE] //
			const InstagramAPI = await new InstagramAPIModel({
				_id: mongoose.Types.ObjectId(),
				access_token: access_token,
			}).save()
	
			return {
				executed: true,
				status: true,
				location: location,
				InstagramAPI: InstagramAPI,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `${location}: Error --> ${err}`,
			}
		}
	},

	c_read: async () => {
		// [READ] //
		const instagramAPI = await InstagramAPIModel.find()

		return {
			executed: true,
			status: true,
			instagramAPI: instagramAPI
		}
	},

	c_update: async ({ access_token }) => {
		try {
			// [READ] //
			const instagramAPI = await InstagramAPIModel.findOne()

			// [UPDATE] //
			const updatedInstagramAPI = await InstagramAPIModel.findOneAndUpdate(
				{ _id: instagramAPI._id },
				{
					$set: { access_token: access_token }
				},
				{ new: true, }
			)
				.exec()
			
			return {
				executed: true,
				status: true,
				location: location,
				updatedInstagramAPI: updatedInstagramAPI,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `${location}: Error --> ${err}`
			}
		}
	},
}