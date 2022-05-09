// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	async (req, res) => {
		try {
			res.send({
				executed: true,
				status: true,
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `/pages/: Error --> ${err}`
			})
		}
	}
)


module.exports = router