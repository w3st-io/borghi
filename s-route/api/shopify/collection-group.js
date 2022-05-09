// [REQUIRE] //
const cors = require('cors')
const express = require('express')


const rh = require('../../../s-route-handler/api/shopify/collection-group')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/find-one/:admin_id/:title',
	async (req, res) => {
		res.send(await rh.findOne({ req }))
	}
)


router.get(
	'/find-one-alphabetized/:admin_id/:title',
	async (req, res) => {
		res.send(await rh.findOne_alphabetized({ req }))
	}
)



module.exports = router