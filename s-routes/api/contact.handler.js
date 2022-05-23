// [REQUIRE] //
const SibApiV3Sdk = require('sib-api-v3-sdk')


// [REQUIRE] Personal //
const config = require('../../s-config')


module.exports = {
	sendEmail: async ({ req }) => {
		SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = config.API__SENDINBLUE;
		
		new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
			{
				subject: `Interested Artist: ${req.body.email.subject}`,

				sender: {
					email: req.body.email.address,
					name: req.body.email.name,
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
							<p>${req.body.email.message}</p>
						</body>
					</html>
				`,

				params: {
					bodyMessage: ''
				}
			}
		).then(
			function(data) {
				return {
					executed: true,
					status: true,
					data: data,
				}
			},
			function(err) {
				return {
					executed: true,
					status: true,
					message: err,
				}
			}
		);
	}
}