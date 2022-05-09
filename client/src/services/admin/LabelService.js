// [IMPORT] //
import axios from 'axios'
import download from 'downloadjs'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/api/admin/label',
		headers: {
			admin_authorization: `Bearer ${localStorage.admintoken}`
		}
	})
}

export default {
	authAxios,


	// [GENERATE] //
	s_generateAutomatic: async function ({ daysAgo, vinylsJSON }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				'/generate-automatic',
				{
					daysAgo,
					vinylsJSON
				},
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


	// [GENERATE] //
	s_generateManual: async function ({ vinylsJSON }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.post(
				'/generate-manual',
				{
					vinylsJSON,
				},
				{ responseType: 'blob' },
			)
			
			download(
				res.data,
				'labels.pdf',
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


	// Single Listing Data //
	s_getListing: async function ({ listing_id }) {
		try {
			const authAxios = await this.authAxios()
		
			const res = await authAxios.get(`/get-listing/${listing_id}`)
			
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
}