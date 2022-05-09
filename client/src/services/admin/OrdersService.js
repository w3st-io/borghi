// [IMPORT] //
import axios from 'axios'
import download from 'downloadjs'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/admin/orders',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	// [GENERATE] //
	s_getOrders: async function ({ daysAgo }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				'/get-orders',
				{ daysAgo },
			)

			return res.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `pdfService: Error --> ${err}`
			}
		}
	},

	
	downloadOrdersSheet: async function ({ orders }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				'/generate-orders-sheet',
				{
					orders,
				},
				{
					responseType: 'blob'
				},
			)

			console.log(res.data);
			
			download(
				res.data,
				'daily-orders.pdf',
				res.headers['content-type', 'text/pdf']
			)
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `pdfService: Error --> ${err}`
			}
		}
	},
}