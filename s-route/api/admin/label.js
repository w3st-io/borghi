// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const Auth = require('../../../s-middleware/Auth')
const rh_admin_label = require('../../../s-route-handler/api/admin/label')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [GNERATE-AUTOMATIC] //
router.post(
	'/generate-automatic',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh_admin_label.generateAutomatic({ req }))
	}
)


// [GENERATE-MANUAL] //
router.post(
	'/generate-manual',
	Auth.adminToken(),
	async (req, res) => {
		res.send(await rh_admin_label.generateManual({ req }))
	}
)


// [GET-SINGLE-LISTING] //
router.get(
	'/get-listing/:listing_id',
	async (req, res) => {
		res.send(await rh_admin_label.getListing({ req }))
	}
)


module.exports = router