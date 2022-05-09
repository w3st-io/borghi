// [REQUIRE] //
const Discogs = require('disconnect').Client;

// [REQUIRE] Personal //
const config = require('../../s-config')

// [FORMAT] //
const toTimestamp = (strDate) => { return Date.parse(strDate) / 1000 }

module.exports = {
	getOrders: async function ({ daysAgo }) {
		try {
			// [INIT] Const //
			const maxPostedSecondsAgo = 86400 * daysAgo

			// [INIT] //
			let allOrders = []
			let runEachPageLoop = true

			// [DISCOGS] //
			const marketplace = new Discogs({
				userToken: config.api.discogs.userToken
			}).marketplace()

			// [API][DISCONNECT] Total Pages //
			const orders = await marketplace.getOrders(
				{
					page: 0,
					per_page: 100,
					sort_order: 'desc',
					status: 'Payment Received',
					archived: false,
				}
			)

			// [FOR] Each Page //
			for (let i = 0; i <= orders.pagination.pages; i++) {
				// [API][DISCONNECT] Get Page //
				const retrieved = await marketplace.getOrders(
					{
						page: i,
						per_page: 100,
						sort_order: 'desc',
						status: 'Payment Received',
						archived: false,
					}
				)

				// [FOR] Each Listing in Page //
				for (let i = 0; i < retrieved.orders.length; i++) {
					// [INIT] //
					const order = retrieved.orders[i]

					const postedSecondsAgo = Math.ceil(
						new Date().getTime() / 1000
					) - toTimestamp(order.created)
					
					// If posted is longer than search period
					if (postedSecondsAgo < maxPostedSecondsAgo) {
						// [PUSH] //
						allOrders.push(order)
					}
					else {
						// [FLAG] //
						runEachPageLoop = false
					}
				}
				
				// [BREAK] //
				if (!runEachPageLoop) { break }
			}

			return {
				executed: true,
				status: true,
				orders: allOrders,
			}
		}
		catch (err) {
			return {
				executed: true,
				status: true,
				message: `Marketplace: Error --> ${err}`,
			}
		}
	},
}