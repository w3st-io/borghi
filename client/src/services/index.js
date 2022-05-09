// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,


	index: async function () {
		const authAxios = await this.authAxios()
	
		const { data } = await authAxios.get('/')
		
		return data
	},
}