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
					email: 'test@test.com',
					name: ''
				},

				to: [
					{
						name: 'Aleem Ahmed',
						email: 'w3st.io2021@gmail.com'
					}
				],

				htmlContent: `
					<html>
						<body>
							<h1>This is a transactional email {{params.bodyMessage}}</h1>
						</body>
					</html>
				`,

				params: {
					bodyMessage: 'Made just for you!'
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