// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [URL] //
	BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SOCKET_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [PORT] //
	PORT: process.env.PORT || 5000,
	
	// [MONGODB] //
	MONG_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/balance-within',
	
	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',

	api: {
		sendinBlue: process.env.API__SENDINBLUE
	},

	email: {
		address: process.env.EMAIL__ADDRESS,
		name: process.env.EMAIL__NAME,
	}
}