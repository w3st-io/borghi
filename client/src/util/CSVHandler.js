// [REQUIRE] //
const csvtojson = require('csvtojson')

function readFileAsync(file) {
	return new Promise((resolve, reject) => {
		let reader = new FileReader()
	
		reader.onload = () => { resolve(reader.result) }
	
		reader.onerror = reject
	
		reader.readAsText(file, 'UTF-8')
	})
}

module.exports = {
	CSVtoJSON: async ({ file }) => {
		const readFile = await readFileAsync(file)

		return await csvtojson(
			{
				noheader: false,
				output: 'json',
			}
		).fromString(readFile)
	},
}