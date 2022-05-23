// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const rh = require('./mail.handler')

// [USE] //
const router = express.Router().use(cors())


router.post(
	'/send-email',
	async (req, res) => {
		res.send(await rh.sendEmail({ req }))
	}
)


module.exports = router