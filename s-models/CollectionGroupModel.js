// [REQUIRE] //
const mongoose = require('mongoose')


module.exports = mongoose.model(
	'CollectionGroup',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		admin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Admin',
			required: true,
		},

		title: {
			type: String,
			maxlength: 2000,
			required: true,
		},

		collections: [
			{
				id: {
					type: String,
					maxlength: 2000,
					required: true,
				},

				title: {
					type: String,
					maxlength: 2000,
					required: true,
				},

				handle: {
					type: String,
					maxlength: 2000,
					required: true,
				},
			}
		],
	})
)