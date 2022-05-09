// [REQUIRE] //
const axios = require('axios')


// [REQUIRE] Personal //
const config = require('../s-config')
const InstagramAPICollection = require('../s-collections/InstagramAPICollection')


// [INIT] //
const baseURL = 'https://graph.instagram.com'
const location = '/s-api/instagram'


// [API] Refresh Token from API //
async function refreshToken({ access_token }) {
	if (access_token) {
		const reqData = await axios.get(
			`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${access_token}`
		)
		
		return reqData
	}
}


module.exports = {
	getInstagramFeed: async function () {
		try {
			let instagramFeed = []

			const instagramAPIObj = await InstagramAPICollection.c_read()

			const reqData = await axios.get(
				`${baseURL}/me/media?fields=media_url,caption&access_token=${instagramAPIObj.instagramAPI[0].access_token}`
			)

			if (reqData.status == 200) {
				instagramFeed = reqData.data
			}

			return {
				executed: true,
				status: true,
				location: location,
				instagramFeed: instagramFeed.data,
			}
		}
		catch (err) {
			return {
				status: false,
				executed: false,
				location: location,
				message: `${location}: Caught Error --> ${err}`
			}	
		}
	},

	intializeInstagramAPI: async function () {
		const instagramAPIObj = await InstagramAPICollection.c_read()

		if (instagramAPIObj.instagramAPI.length == 0) {
			await InstagramAPICollection.c_create({
				access_token: config.api.instagram.accessToken
			})
		}
		else {
			// [API] Refresh token from instagram //
			const rtObj = await refreshToken({
				access_token: instagramAPIObj.instagramAPI[0].access_token
			})

			// [UPDATE][InstagramAPI] //
			await InstagramAPICollection.c_update({
				access_token: rtObj.data.access_token
			})
		}
	},
}