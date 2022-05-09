// [REQUIRE] //
const Fuse = require('fuse.js')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [INIT] //
let posts = []


module.exports = {
	posts: posts,


	insertInto: async function ({ newPosts }) {
		// [SEARCH] //	
		const fuse = new Fuse(
			newPosts,
			{
				includeScore: true,
				useExtendedSearch: true,
				keys: ['data.title', 'data.selftext']
			}
		)

		const results = fuse.search("'for 'sale")

		// [UPDATE] //
		for (let i = 0; i < results.length; i++) {
			const result = results[i].item

			if (posts.length > 500) { posts.pop() }

			posts.push(result)
		}

		return posts
	},


	read: async function () { return posts }
}