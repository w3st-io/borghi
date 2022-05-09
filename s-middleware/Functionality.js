// [REQUIRE] //
const config = require('../s-config')


class Auth {
	static admin() {
		return (req, res, next) => {
			if (config.functionality.admin === 'true') { next() }
			else {
				res.send({
					executed: true,
					status: false,
					location: '/s-middleware/Functionality',
					message: 'This app does not support a user/admin system',
				})
			}
		}
	}
}


module.exports = Auth
