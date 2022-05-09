// [IMPORT] //
import axios from 'axios'


// [INIT] const //
const location = 'ShopifyService'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/admin/shopify/product',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	s_deleteAll: async function () {
		try {
			const authAxios = await this.authAxios()
			
			const res = await authAxios.post('/delete-all')
			
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