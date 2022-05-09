// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const config = require('../../../s-config')
const rh_admin = require('../../../s-route-handler/api/admin')
const rateLimiters = require('../../../s-rate-limiters')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [INIT] //
const secretKey = config.app.secretKey


/******************* [LOGIN/REGISTER] *******************/
// [LOGIN] //
router.post(
	'/login',
	async (req, res) => { res.send(await rh_admin.login({ req })) }
)


// [REGISTER] //
router.post(
	'/register',
	rateLimiters.registrationLimiter,
	async (req, res) => { res.send(await rh_admin.register({ req })) }
)


module.exports = router