// [IMPORT] //
import axios from 'axios'


// [INIT] const //
const location = 'ShopifyService'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/admin/shopify',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	// Single Listing Data //
	s_smartCollections_readAll: async function ({ limit, page }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.get(`/smart-collection/read/${limit}/${page}`)
			
			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location}: Error --> ${err}`
			}
		}
	},

	
	s_smartCollections_create: async function ({ collection }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				`/smart-collection/create`,
				{ collection }
			)
			
			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location}: Error --> ${err}`
			}
		}
	},


	s_smartCollections_create_artists: async function ({ JSONData }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				`/smart-collection/create/artist`,
				{ JSONData }
			)
			
			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location}: Error --> ${err}`
			}
		}
	},


	s_smartCollections_update: async function ({ id, params }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				`/smart-collection/update`,
				{ id, params }
			)
			
			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${location}: Error --> ${err}`
			}
		}
	},

}