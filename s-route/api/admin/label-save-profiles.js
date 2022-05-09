// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const rh_admin_labelSaveProfile = require('../../../s-route-handler/api/admin/labelSaveProfile')
const rateLimiter = require('../../../s-rate-limiters')
const Auth = require('../../../s-middleware/Auth')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


/******************* [CRUD] *******************/
// [CREATE] Auth Required //
router.post(
	'/create',
	rateLimiter.postLimiter,
	Auth.adminToken(),
	async (req, res) => {
		res.send(
			await rh_admin_labelSaveProfile.create({
				labels: req.body.labels
			})
		)
	}
)