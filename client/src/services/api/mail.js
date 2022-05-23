// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/mail',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,


	s_sendEmail: async function ({ email }) {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.post('/send-email', email)).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `service api mail: Error --> ${err}`,
			}
		}
	},
}