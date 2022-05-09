const cors = require('cors')
const express = require('express')


const api_instagram = require('../../s-api/instagram')


const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		const instagramFeedObj = await api_instagram.getInstagramFeed()
		
		res.send(instagramFeedObj)
	}
)


module.exports = router