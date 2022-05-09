// [REQUIRE] //
const mongoose = require('mongoose')


module.exports = mongoose.model(
	'InstagramAPI',
	mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,

		access_token: {
			type: String,
			maxlength: 1000,
			required: true,
		},
	})
)