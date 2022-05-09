// [REQUIRE] //
const axios = require('axios')


// [REQUIRE] Personal //
const redditAPI = require('./state')


module.exports = {
	update: async function () {
		try {
			let resData = await axios.get(
				'https://www.reddit.com/r/vinyl/new.json?sort=new',
			)

			redditAPI.insertInto({
				newPosts: resData.data.data.children
			})
	 	}
		catch (err) { console.log(err) }
	}
}