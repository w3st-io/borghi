// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [REQUIRE] Personal //
const redditState = require('../../s-api/reddit/state')
const FacebookListsingCollection = require('../../s-collections/FacebookListingCollection')
const Auth = require('../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [INIT] //
const location = '/s-route/api/listings'


router.get(
	'/',
	Auth.adminToken(),
	async (req, res) => {
		try {
			const fblObj = await FacebookListsingCollection.readAll_sorted({ sort: 1 })
			const redditPosts = await redditState.read()
			
			res.send({
				executed: true,
				status: true,
				facebookListings: fblObj.facebookListings,
				redditPosts: redditPosts,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: true,
				message: `${location}: Error --> ${err}`
			})
		}
	}
)


module.exports = router