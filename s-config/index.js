// [REQUIRE] //
require('dotenv').config()


module.exports = {
	// [NODE_ENV] //
	nodeENV: process.env.NODE_ENV || 'development',

	// [PORT] //
	PORT: process.env.PORT || 5000,

	// [APP] //
	app: {
		// [URL] //
		clientBaseURL: process.env.APP__BASE_URL || 'http://localhost:8080',
		serverBaseURL: process.env.APP__BASE_URL || 'http://localhost:5000',

		// [SECRET] //
		secretKey: process.env.APP__SECRET_KEY || 'secret',

		// [MONGODB] //
		mongoURI: process.env.APP__MONGO_URI || '',
	},

	labelCreator: {
		// [BASE-URL] //
		baseURL: process.env.LABEL_CREATOR__BASE_URL || 'http://www.jjvinyls.com',
	},

	// [FUNCTIONALITY] //
	functionality: {
		admin: process.env.FUNCTIONALITY__ADMIN || false,
	},
	
	// [API] //
	api: {
		// [INSTAGRAM] //
		instagram: {
			accessToken: process.env.API__INSTAGRAM__ACCESS_TOKEN || '',
		},

		// [DISCOGS] //
		discogs: {
			userToken: process.env.API__DISCOGS__USERTOKEN || '',
		},

		// [SHOPIFY] //
		shopify: {
			shopName: process.env.API__SHOPIFY__SHOP_NAME || '',
			accessToken: process.env.API__SHOPIFY__ACCESS_TOKEN || '',
		},
	}
}