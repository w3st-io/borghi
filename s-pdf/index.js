const pdf = require('html-pdf')

// [INIT] //
const defaultOptions = {
	format: 'A9',
	orientation: 'landscape',
	quality: 100,
	border: {
		left: '0cm',
		right: '0cm',
		top: '0cm',
		bottom: '0cm',
	},
	header: { height: '0mm' },
	footer: { height: '0mm' }
}

module.exports = {
	createBufferFromHTML: async function (pdfHTML, options = defaultOptions) {
		return new Promise(
			(resolve, reject) => {
				pdf.create(pdfHTML, options).toBuffer(
					function (err, buffer) {
						if (err) { reject(err) }

						resolve(buffer)
					}
				)
			}
		)
	},
}