// [REQUIRE] //
const mongoose = require('mongoose')


const facebookListingSchema = mongoose.Schema({
	createdAt: {
		type: Date,
		default: Date.now,
		maxlength: 50
	},
}, { strict: false })


module.exports = mongoose.model('FacebookListing', facebookListingSchema)