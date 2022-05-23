// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const rh = require('./contact.handler')

// [USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		res.send(await rh.sendEmail({ req }))
	}
)


module.exports = router