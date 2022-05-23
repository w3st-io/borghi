// [REQUIRE] //
const SibApiV3Sdk = require('sib-api-v3-sdk')


// [REQUIRE] Personal //
const config = require('../../s-config')


module.exports = {
	sendEmail: async ({ req }) => {
		try {
			SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = config.api.sendinBlue

			const result = await new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
				{
					subject: `Borghi Website Mailer: ${req.body.subject}`,
	
					sender: {
						email: req.body.address,
						name: req.body.name,
					},
	
					to: [
						{
							name: config.email.name,
							email: config.email.address
						}
					],
	
					htmlContent: `
						<html>
							<body>
								<p>${req.body.message}</p>
							</body>
						</html>
					`,
	
					params: {
						bodyMessage: ''
					}
				}
			)

			return {
				executed: true,
				status: true,
				result: result,
				message: 'Message successfully sent'
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: err,
			}
		}
	}
}