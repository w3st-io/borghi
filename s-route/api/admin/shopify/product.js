// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const Auth = require('../../../../s-middleware/Auth')
const rh = require('../../../../s-route-handler/api/admin/shopify/product')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/delete-all',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh.deleteAll({ req }))
	}
)


module.exports = router