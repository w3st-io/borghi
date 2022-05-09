const companyInfo = require('../companyInfo')

// [EXPORT] //
module.exports = {
	r1: {
		c1: { title: 'About Us', },
		c2: {
			image: require('../../assets/images/pages/about/about-image.jpg')
		},
		c3: {
			title: 'Our Mission',
			header2: '',
			description: companyInfo.companyMission,
		}
	},
}