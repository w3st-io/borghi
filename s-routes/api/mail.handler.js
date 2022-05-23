// [REQUIRE] //
const SibApiV3Sdk = require('sib-api-v3-sdk')


// [REQUIRE] Personal //
const config = require('../../s-config')


module.exports = {
	sendEmail: async ({ req }) => {
		SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = config.api.sendinBlue;
		
		new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
			{
				subject: `Interested Artist: ${req.body.subject}`,

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
		).then(
			function(data) {
				console.log(data);
				return {
					executed: true,
					status: true,
					data: data,
				}
			},
			function(err) {
				console.log(err);
				return {
					executed: true,
					status: true,
					message: err,
				}
			}
		);
	}
}