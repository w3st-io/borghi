// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const Auth = require('../../../../s-middleware/Auth')
const rh = require('../../../../s-route-handler/api/admin/shopify/collection-group')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/create-one',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh.createOne({ req }))
	}
)


router.get(
	'/find-one/:title',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh.findOne({ req }))
	}
)


router.post(
	'/update-one',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh.updateOne({ req }))
	}
)


module.exports = router