// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/pages',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,
	
	
	// [HOME] //
	s_home: async function () {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get('/')).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},


	// [ADMIN] //
	s_admin: async function () {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get('/admin')).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},


	// [ADMIN] //
	s_admin_shopify_product_analyze: async function () {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get('/admin/shopify/product/analyze')).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},

	
	// [GALLERY] //
	s_gallery: async function () {
		try {
			const authAxios = await this.authAxios()
		
			return (
				await authAxios.get(`/gallery`)
			).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},


	// [SCREENER] //
	s_screener: async function () {
		try {
			const authAxios = await this.authAxios()
			
			return (await authAxios.get(`/screener`)).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},
}