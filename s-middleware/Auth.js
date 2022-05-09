// [REQUIRE] //
const jwt = require('jsonwebtoken')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../s-config')


// [INIT] //
const secretKey = config.app.secretKey


class Auth {
	/******************* [ADMIN] *******************/
	// [ADMIN-TOKEN] //
	static adminToken() {
		return (req, res, next) => {
			// [INIT] //
			const token = req.headers.admin_authorization

			// If a token exists =>  Validate JWT //
			if (token) {
				// [SLICE] "Bearer " //
				const tokenBody = token.slice(7)

				if (validator.isJWT(tokenBody)) {
					// [VERIFY] tokenBody //
					jwt.verify(tokenBody, secretKey, async (err, decoded) => {
						if (decoded) {
							// [INIT] Put decoded in req //
							req.admin_decoded = decoded

							// Check if the role is admin
							if (decoded.role == 'admin') { next() }
							else {
								res.send({
									executed: true,
									status: false,
									message: 'Access Denied: Invalid Token',
									auth: false,
								})
							}
						}
						else {
							res.send({
								executed: true,
								status: false,
								message: `Access Denied: JWT Error --> ${err}`,
								auth: false,
							})
						}
					})
				}
				else {
					res.send({
						executed: true,
						status: false,
						message: 'Access denied: Not valid JWT',
						auth: false,
					})
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Access denied: No token passed',
					auth: false,
				})
			}
		}
	}


	// [ADMIN-TOKEN] NOT required //
	static adminTokenNotRequired() {
		return async (req, res, next) => {
			if (req.headers.admin_authorization) {
				// [SLICE] "Bearer " //
				const tokenBody = req.headers.admin_authorization.slice(7)

				if (tokenBody !== 'undefined') {
					// Validate JWT //
					try {
						const decoded = await jwt.verify(tokenBody, secretKey)

						// Check if the role is admin
						if (decoded.role == 'admin') { req.admin_decoded = decoded }
						else {
							res.send({
								executed: true,
								status: false,
								message: 'Access Denied: Invalid Token',
								auth: false,
							})
						}
					}
					catch (err) { console.log('JWT Verify:', err) }
					
				}
			}
			else { console.log('no req.headers.user_authorization') }
			
			// Since token is not required move on anyways
			next()
		}
	}
}


module.exports = Auth
