// [REQUIRE] //
const cors = require('cors')
const express = require('express')

// [REQUIRE] Personal //
const api_discogs_marketplace = require('../../../s-api/discogs/marketplace')
const Auth = require('../../../s-middleware/Auth')
const pdf = require('../../../s-pdf')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.post(
	'/get-orders',
	Auth.adminToken(),
	async (req, res) => {
		try {
			const ordersObj = await api_discogs_marketplace.getOrders({
				daysAgo: req.body.daysAgo
			})

			res.send({
				executed: true,
				status: true,
				orders: ordersObj.orders
			})
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `/api/orders/get-orders: Error --> ${err}`
			})
		}
	}
)


// [MAIN-ROUTE] //
router.post(
	'/generate-orders-sheet',
	Auth.adminToken(),
	async (req, res) => {
		try {
			// [INIT] //
			let html = `
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
					rel="stylesheet"
				>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
					crossorigin="anonymous"
				>

				<style>
					* {
						font-family: "Raleway", sans-serif !important;
					}

					.date {
						margin-bottom: 10px;
					}

					table {
						width: 100%;
					}

					.order {
						font-size: 10px;
					}

					.item {
						font-size: 10px;
						margin: 0;
					}
				</style>
				
				<h6><small>Pull Sheet</small></h6>
				<h6 class="date"><small>${new Date().toLocaleString()}</small></h6>
			`

			for (let i = 0; i < req.body.orders.length; i++) {
				const o = req.body.orders[i]

				html = html + `
					<hr style="margin: 5px 0;">
					<table>
						<tr>
							<td style="width: 50%;">
								<h6 class="order" style="margin: 0;">${i + 1}) ${o.id}</h6>
							</td>
							<td style="width: 50%; text-align: right;">
								<h6 class="order" style="margin: 0;">
									${new Date(o.created).toLocaleString()}
								</h6>
							</td>
						</tr>
					</table>
					<hr style="margin: 5px 0;">

					<table>
						<tr>
							<td style="width: 15%;">
								<h6 class="item">
									<b>Location</b>
								</h6>
							</td>
							<td style="width: 85%;">
								<h6 class="item">
									<b>Description</b>
								</h6>
							</td>
						</tr>
					</table>
				`

				for (let ii = 0; ii < o.items.length; ii++) {
					const item = o.items[ii]
					
					html = html + `
						<table>
							<tr>
								<td style="width: 15%;">
									<h6 class="item">
										${item.item_location}
									</h6>
								</td>
								<td style="width: 85%;">
									<h6 class="item">
										${item.release.description}
									</h6>
								</td>
							</tr>
						</table>
					`
				}

				html = html + `<br>`
			}
			
			let ordersSheet = await pdf.createBufferFromHTML(
				html,
				{
					format: 'A4',
					border: {
						left: '1.2cm',
						right: '1.2cm',
						top: '0cm',
						bottom: '0cm',
					},
					header: { height: '10mm' },
					footer: { height: '10mm' }
				}
				
			)

			res.send(ordersSheet)
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: `/api/orders/get-orders: Error --> ${err}`
			})
		}
	}
)


module.exports = router