// [REQUIRE] //
const Discogs = require('disconnect').Client;

// [REQUIRE] Personal //
const config = require('../../s-config')

// [FORMAT] //
const toTimestamp = (strDate) => { return Date.parse(strDate) / 1000 }

module.exports = {
	getInventory: async function ({ daysAgo }) {
		// [INIT] Const //
		const maxPostedSecondsAgo = 86400 * daysAgo

		// [INIT] //
		let allListings = []
		let runEachPageLoop = true

		// [DISCOGS] //
		const marketplace = new Discogs({
			userToken: config.api.discogs.userToken
		}).marketplace()

		// [API][DISCONNECT] Total Pages //
		const listings = await marketplace.getInventory(
			'jjinthemaking',
			{
				page: 0,
				per_page: 100,
				sort_order: 'desc',
			},
		)

		// [FOR] Each Page //
		for (let i = 0; i <= listings.pagination.pages; i++) {
			// [API][DISCONNECT] Get Page //
			const retrieved = await marketplace.getInventory(
				'jjinthemaking',
				{
					page: i,
					per_page: 100,
					sort_order: 'desc',
				},
			)

			// [FOR] Each Listing in Page //
			for (let i = 0; i < retrieved.listings.length; i++) {
				// [INIT] //
				const listing = retrieved.listings[i]

				const postedSecondsAgo = Math.ceil(
					new Date().getTime() / 1000
				) - toTimestamp(listing.posted)
				
				// If posted is longer than search period
				if (postedSecondsAgo < maxPostedSecondsAgo) {
					// [PUSH] //
					allListings.push(listing)
				}
				else {
					// [FLAG] //
					runEachPageLoop = false
				}
			}
			
			// [BREAK] //
			if (!runEachPageLoop) { break }
		}

		// [RETURN]//
		return allListings
	},
	

	getListing: async function ({ listing_id }) {
		// [DISCOGS] //
		const marketplace = new Discogs({ userToken: config.api.discogs.userToken })
		.marketplace()

		// [API][DISCONNECT] Total Pages //
		return await marketplace.getListing(listing_id)
	},
}