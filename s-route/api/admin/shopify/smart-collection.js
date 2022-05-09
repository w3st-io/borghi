// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const rh_admin_shopify_smartCollections = require(
	'../../../../s-route-handler/api/admin/shopify/smart-collection'
)


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.post(
	'/create',
	async (req, res) => {
		res.send(
			await rh_admin_shopify_smartCollections.rh_create({
				req
			})
		)
	}
)


router.post(
	'/create/artist',
	async (req, res) => {
		res.send(
			await rh_admin_shopify_smartCollections.rh_create_artist({
				req
			})
		)
	}
)


router.get(
	'/read-all',
	async (req, res) => {
		res.send(await rh_admin_shopify_smartCollections.rh_readAll({ req }))
	}
)


router.get(
	'/read/:limit/:page',
	async (req, res) => {
		res.send(await rh_admin_shopify_smartCollections.rh_read_paginated({ req }))
	}
)


router.post(
	'/update',
	async (req, res) => {
		res.send(
			await rh_admin_shopify_smartCollections.rh_update({
				req
			})
		)
	}
)


router.get(
	'/delete/all',
	async (req, res) => {
		res.send(
			await rh_admin_shopify_smartCollections.rh_delete_all()
		)
	}
)


module.exports = router