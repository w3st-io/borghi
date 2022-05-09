// [REQUIRE] //
const fetch = require('node-fetch')


// [REQUIRE] Personal //
const FacebookListingCollection = require('../../s-collections/FacebookListingCollection')
const config = require('../../s-config')


// [INIT] //
const location = '/s-api/facebook/api'


async function attempt_update() {
	try {
		let fetchData = await fetch("https://www.facebook.com/api/graphql/", {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/x-www-form-urlencoded",
				"sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
				"sec-ch-ua-mobile": "?0",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-fb-friendly-name": "CometMarketplaceSearchContentPaginationQuery",
				"x-fb-lsd": "AVrOV9zi1sY",
				"cookie": "datr=WLM6YCSrwCEEe-N0QPIbg181; dpr=0.800000011920929; sb=MO1NYcJtiiDhGgCmr4Wp2MbP; wd=2400x1172; fr=0UgAxjLBYYBOhEPxq..BgJxPn._h.GEc.0.0.BhTe03.AWWBym6aZnE"
			},
			"referrer": "https://www.facebook.com/marketplace/105908722776776/search/?query=vinyl%20records",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": "av=0&__user=0&__a=1&__dyn=7xeUmwlE7ibwKBWo2vwAxu13wvoKewSwMwNw9G2S0im3y4o0B-q1ew65xO0FE21y87i0n2US2G3i0Boy1PwBgao6C0Mo5W3e9wlo5q4Uqw8y4UaEW2C10wNwwwJK2W5olw8Xxm16waCm260iK2S3qazo560J8&__csr=gGDd5bTHJcCABQDtZuObFkBjrZBmrjmZtd92oJoyWKKULqyrz8S4e8BzEyim3J0ynx6qHCBWxKEb8uDDDyVEfC2mUkhFVUqwLxC0rO5U1SE2fjw1k-083w0hUo05GO1Lw3FE4UHzUuw8e08Pway0ie2-3yEO09zwf-0q-bwNyU4S0vG0pu0YE0E26U6i0pG0bQw43wvU4N09q04yA2S0my0aVw0AZwfx0cK13w7nw14y1TKBc0FE1lbIIwvyoUw6ql5w&__req=16&__hs=18894.HYP%3Acomet_loggedout_pkg.2.0.0.0.&dpr=1&__ccg=UNKNOWN&__rev=1004450904&__s=zjg7h7%3Aab59av%3A440gre&__hsi=7011535493799899053-0&__comet_req=1&lsd=AVrOV9zi1sY&jazoest=2967&__spin_r=1004450904&__spin_b=trunk&__spin_t=1632500322&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMarketplaceSearchContentPaginationQuery&variables=%7B%22count%22%3A24%2C%22cursor%22%3A%22%7B%5C%22pg%5C%22%3A1%2C%5C%22b2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22%5C%22%2C%5C%22it%5C%22%3A0%2C%5C%22hmsr%5C%22%3Afalse%2C%5C%22tbi%5C%22%3A0%7D%2C%5C%22c2c%5C%22%3A%7B%5C%22br%5C%22%3A%5C%22AbqIbWgVUE3pnzixrvFOIpo4Xr-asIdGsfG_wBOj2juyBxp2ghqnZ00gVF6y68kLt12yTBtUtL05IGi53iO0ubPWndZRAokF3sTDbr_97FjatdGImI2R8hILeHMCzb42JbI4UO5qjBVY8G0GeQekrgTxo2RjWC3VeZhgjPwyiL0ky5XRlSHayMe0YmZoFKqXDDZdS8ZrAc_pG1l7s7R0TcR8X5Q0GkI5aq45Fs-NjxJRIERLBMy_C0I1RlnBtWnKKy0DkxlwJBGlk_-YZKq1LlHHzi_W5OtQRZ_k-lg-wfPMjLdaE_ch9Qr6fhE9AWznSc65Vj2EkG3Yi5jCOX2rSQ6hcat6XnFQ9OmDdQeICzqSKGqtORDZ8z8n4YLxeIv6U7DC2ZeDQ_fDXoljLhzI0A0GiRMuinjYekWXR64ocpq4S3WWfQUoP-FeXeBwfZTirEsSx02a9JbUr4pCN8rSrXJLVCTqtYWgODNqBKY9qrGWTIEl3i7mccG9ITdjRVuphvU7-ukbgLNOTwLkYS5ZFlaOWUXywU_unzm1b32CJcLC-0kj92ZgBeHPsJa3_k-gZkE%5C%22%2C%5C%22it%5C%22%3A44%2C%5C%22rpbr%5C%22%3A%5C%22%5C%22%2C%5C%22rphr%5C%22%3Afalse%7D%2C%5C%22irr%5C%22%3Atrue%2C%5C%22rui%5C%22%3A%5B%5D%7D%22%2C%22params%22%3A%7B%22bqf%22%3A%7B%22callsite%22%3A%22COMMERCE_MKTPLACE_WWW%22%2C%22query%22%3A%22vinyl%20records%22%7D%2C%22browse_request_params%22%3A%7B%22commerce_enable_local_pickup%22%3Atrue%2C%22commerce_enable_shipping%22%3Atrue%2C%22commerce_search_and_rp_available%22%3Atrue%2C%22commerce_search_and_rp_category_id%22%3A%5B%5D%2C%22commerce_search_and_rp_condition%22%3Anull%2C%22commerce_search_and_rp_ctime_days%22%3Anull%2C%22filter_location_latitude%22%3A40.970764160156%2C%22filter_location_longitude%22%3A-73.965454101562%2C%22filter_price_lower_bound%22%3A0%2C%22filter_price_upper_bound%22%3A214748364700%2C%22filter_radius_km%22%3A65%7D%2C%22custom_request_params%22%3A%7B%22browse_context%22%3Anull%2C%22contextual_filters%22%3A%5B%5D%2C%22saved_search_strid%22%3Anull%2C%22search_vertical%22%3A%22C2C%22%2C%22seo_url%22%3Anull%2C%22surface%22%3A%22SEARCH%22%2C%22virtual_contextual_filters%22%3A%5B%5D%7D%7D%2C%22prefetchMarketplaceSearchImages%22%3Afalse%2C%22scale%22%3A1%7D&server_timestamps=true&doc_id=4578964282166780",
			"method": "POST",
			"mode": "cors"
		})
		
		fetchData = await fetchData.json()

		// [CHECK-ERROR] //
		if (fetchData.errors) {
			// [FAILURE] //
			if (config.nodeENV !== 'production') {
				console.log('FAILURE - attempt_update:', fetchData.errors)
			}

			return {
				executed: true,
				status: false,
				message: 'attempt_update1: FB Request Failed',
				errors: fetchData.errors
			}
		}
		else {
			// [SUCCESS] //
			for (let i = 0; i < fetchData.data.marketplace_search.feed_units.edges.length; i++) {
				const fbl = fetchData.data.marketplace_search.feed_units.edges[i]
				
				await FacebookListingCollection.storeFBListing(fbl)
			}


			return {
				executed: true,
				status: true,
				location: location,
				listings: fetchData.data.marketplace_search.feed_units.edges
			}
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			location: location,
			message: `${location}: Caught Error --> ${err}`
		}
	}
}


async function tryAttempts() {
	try {
		// [ATTEMPT-1] //
		const attempt = await attempt_update()

		if (attempt.status) {
			return {
				executed: true,
				status: true,
				retryLater: false,
				attempt: attempt,
			}
		}
		
		// [FAIL] //
		return {
			executed: true,
			status: false,
			retryLater: true,
			attempt: attempt,
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			location: location,
			message: `${location}: Caught Error --> ${err}`
		}
	}
}


module.exports = {
	loop: async function () {
		// [INIT] //
		let attempt = await tryAttempts()

		// [LOOP] //
		var attemptLoop = setInterval(async function () {
			console.log('attemptLoop')

			attempt = await tryAttempts()

			// [BREAK] Attempt Failed //
			if (attempt.status == false) { clearInterval(attemptLoop) }

		}, 30000)

		// [LOOP] Retry In An Hour //
		setTimeout(async function () { await this.loop() }, 1000 * 60 * 60)
	},
}