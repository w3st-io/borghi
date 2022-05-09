// [IMPORT] //
import axios from 'axios'


// [INIT] const //
const location = 'ShopifyService'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/admin/shopify/collection-group',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	s_createOne: async function ({ title }) {
		try {
			const authAxios = await this.authAxios()
			
			const res = await authAxios.post('/create-one', { title })
			
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
	

	s_findOne: async function ({ title }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.get(`/find-one/${title}`)
			
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


	s_updateOne: async function ({ title, columnName, JSONData }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(`/update-one`, {
				title,
				columnName,
				JSONData
			})
			
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