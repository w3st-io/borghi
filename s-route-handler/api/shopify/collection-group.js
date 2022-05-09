// [REQUIRE] //
const mongoose = require('mongoose')
const validator = require('validator')


// [REQUIRE] Personal //
const CollectionGroupCollection = require('../../../s-collections/CollectionGroupCollection')


// [INIT] //
const location = ''


module.exports = {
	findOne: async ({ req }) => {
		try {
			// [VALIDATE] admin_id //
			if (!mongoose.isValidObjectId(req.params.admin_id)) {
				return {
					executed: true,
					status: false,
					message: 'Invalid admin_id'
				}
			}

			// [VALIDATE] admin_id //
			if (!validator.isAscii(req.params.title)) {
				return {
					executed: true,
					status: false,
					message: 'Invalid title'
				}
			}

			const result = await CollectionGroupCollection.c_findOne({
				query: {
					admin: req.params.admin_id,
					title: req.params.title,
				},
			})

			return {
				executed: true,
				status: true,
				location: location,
				result: result.collectionGroup,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `RH: Caught Error --> ${err}`,
			}
		}
	},


	findOne_alphabetized: async ({ req }) => {
		try {
			// [VALIDATE] admin_id //
			if (!mongoose.isValidObjectId(req.params.admin_id)) {
				return {
					executed: true,
					status: false,
					message: 'Invalid admin_id'
				}
			}

			// [VALIDATE] admin_id //
			if (!validator.isAscii(req.params.title)) {
				return {
					executed: true,
					status: false,
					message: 'Invalid title'
				}
			}

			let alphabetized = {
				number: [],
				a: [], b: [], c: [], d: [], e: [], f: [], g: [], h: [], i: [], j: [],
				k: [], l: [], m: [], n: [], o: [], p: [], q: [], r: [], s: [], t: [],
				u: [], v: [], w: [], x: [], y: [], z: [],
				other: [],
			}

			const result = await CollectionGroupCollection.c_findOne({
				query: {
					admin: req.params.admin_id,
					title: req.params.title,
				},
			})

			for (let i = 0; i < result.collectionGroup.collections.length; i++) {
				const collection = result.collectionGroup.collections[i]
				
				const letter = collection.handle.charAt(0)
				
				if (validator.isAlpha(letter)) {
					alphabetized[letter].push(collection)
				}
				else if (validator.isInt(letter)) {
					alphabetized.number.push(collection)
				}
				else { alphabetized.other.push(collection) }
			}

			return {
				executed: true,
				status: true,
				location: location,
				alphabetized: alphabetized,
			}
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				location: location,
				message: `RH: Caught Error --> ${err}`,
			}
		}
	},
}