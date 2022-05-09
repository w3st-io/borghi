// [IMPORT] //
import jwtDecode from 'jwt-decode'
import axios from 'axios'


// [IMPORT] Personal //
import { EventBus } from '@/main'
import store from '@/store'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/admin',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,
	
	
	/******************* [ADMIN-LOGIN-LOGOUT-REGISTER-CHECKIN] *******************/
	s_getAdminTokenDecodeData: async function () {
		if (localStorage.admintoken) { return jwtDecode(localStorage.admintoken) }
		else {
			return {
				admin_id: '',
				role: '',
				email: '',
				username: '',
				first_name: '',
				last_name: '',
			}
		}
	},
	
	
	// [LOGIN] //
	s_login: async function (email, password) {
		try {
			const authAxios = await this.authAxios()
		
			const { data } = await authAxios.post('/login', { email, password })
	
			if (data.validation) {
				// [TOKEN] //
				localStorage.setItem('admintoken', data.token)
	
				// [STORE][JWT] Get decoded //
				store.state.admin.decoded = jwtDecode(localStorage.admintoken)
			
				// [STORE] //
				store.state.admin.logged = true
			}
	
			return data
		}
		catch (err) {
			return {
				executed: true,
				status: false,
				message: `AdminService: Error --> ${err}`
			}
		}
	},
	
	
	// [LOGOUT] //
	s_logout: async function () {
		// [TOKEN] //
		localStorage.removeItem('admintoken')
	
		// [STORE][JWT] Get decoded //
		store.state.admin.decoded = {}
			
		// [STORE] //
		store.state.admin.logged = false
	
		// [EMIT] //
		EventBus.$emit('admin-logged-out')
	},
	
	
	// [REGISTER] //
	s_register: async function ({ username, email, password }) {
		try {
			const authAxios = await this.authAxios()
			return (
				await authAxios.post('/register', { username, email, password, })
			).data
		}
		catch (err) {
			return {
				executed: true,
				status: false,
				message: `AdminService: Error --> ${err}`,
			}
		}
	},


	// [CHECK-IN] //
	s_checkIn: async function () {
		if (localStorage.admintoken) {
			// [STORE] //
			store.state.admin.decoded = jwtDecode(localStorage.admintoken)
			store.state.admin.logged = true
		}
	},
}