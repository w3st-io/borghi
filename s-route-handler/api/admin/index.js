// [REQUIRE] //
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const validator = require('validator')


// [REQUIRE] Personal //
const adminCollection = require('../../../s-collections/adminCollection')
const config = require('../../../s-config')


// [INIT] const //
const location = '/api/admin'
const secretKey = config.app.secretKey


module.exports = {
	login: async ({ req }) => {
		try {
			// [VALIDATE] General //
			if (
				!validator.isAscii(req.body.email) ||
				!validator.isAscii(req.body.password)
			) {
				return {
					executed: true,
					status: false,
					location: `${location}/login`,
					message: 'Invalid params'
				}
			}

			// [VALIDATE] email //
			if (!validator.isEmail(req.body.email)) {
				return {
					executed: true,
					status: false,
					location: `${location}/login`,
					message: 'Invalid email',
				}
			}

			const adminObj = await adminCollection.c_readByEmail(req.body.email)

			if (!adminObj.user) {
				return {
					executed: true,
					status: true,
					validation: false,
					location: `${location}/login`,
					message: 'Admin NOT found',
				}
			}

			// [VALIDATE-PASSWORD] //
			if (!bcrypt.compareSync(req.body.password, adminObj.user.password)) {
				return {
					executed: true,
					status: true,
					validation: false,
					location: `${location}/login`,
					message: 'Invalid login credentials',
				}
			}

			// [SUCCESSFUL-LOGIN] //
			const token = jwt.sign(
				{
					admin_id: adminObj.user._id,
					role: adminObj.user.role,
					email: adminObj.user.email,
					username: adminObj.user.username,
					first_name: adminObj.user.first_name,
					last_name: adminObj.user.last_name,
				},
				secretKey,
				{ expiresIn: 7200000 }
			)
	
			return {
				executed: true,
				status: true,
				validation: true,
				token: token,
				location: `${location}/login`,
				message: 'success',
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: `${location}/login`,
				message: `Error --> ${err}`,
			}
		}
	},

	
	register: async ({ req }) => {
		try {
			// [VALIDATE] General //
			if (
				!validator.isAscii(req.body.username) ||
				!validator.isAscii(req.body.email) ||
				!validator.isAscii(req.body.password)
			) {
				return {
					executed: true,
					status: false,
					location: `${location}/register`,
					message: 'Invalid Params'
				}
			}

			return await adminCollection.c_register(
				req.body.username,
				req.body.email,
				req.body.password,
			)
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: `${location}/register`,
				message: `Error --> ${err}`,
			}
		}
	},
}