const companyInfo = require('../companyInfo')

module.exports = {
	companyInfo: companyInfo,

	cnt1: {
		heroCenterImg: require('../../assets/media/pages/index/Hero/hero-text2.png'),

		heroBackgoundImgs: [
			require('../../assets/media/pages/index/Hero/1.jpg'),
			require('../../assets/media/pages/index/Hero/2.jpg'),
			require('../../assets/media/pages/index/Hero/3.jpg'),
			require('../../assets/media/pages/index/Hero/4.jpg'),
			require('../../assets/media/pages/index/Hero/5.jpg'),
			require('../../assets/media/pages/index/Hero/6.jpg'),
			require('../../assets/media/pages/index/Hero/7.jpg'),
			require('../../assets/media/pages/index/Hero/8.jpg'),
			require('../../assets/media/pages/index/Hero/9.jpg'),
			require('../../assets/media/pages/index/Hero/10.jpg'),
			require('../../assets/media/pages/index/Hero/11.jpg'),
			require('../../assets/media/pages/index/Hero/12.jpg'),
		]
	},

	cnt2: {
		slides: [
			{
				title: 'Art Wings',
				description: 'Choose between 6, 12, or 24 pieces of our classic traditional wings',
				image: require('../../assets/media/pages/index/GalleryPreview/3.jpg'),
				link: 'https://artofwings.revelup.online/',
				cost: '$7.99 - $27.99',
			},
			{
				title: 'Sliders + Art Appetizer',
				description: 'Your choice of sliders with any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)',
				image: require('../../assets/media/pages/index/GalleryPreview/4.jpg'),
				link: 'https://artofwings.revelup.online/',
				cost: '$8.49 - $14.99',
			},
			{
				title: 'Sliders + Traditional or Boneless 4pc wings',
				description: 'Your choice of sliders with classic traditional or boneless 4pc wingswith you choice of sauce.',
				image: require('../../assets/media/pages/index/GalleryPreview/5.jpg'),
				link: 'https://artofwings.revelup.online/',
				cost: '$11.49 - $35.98',
			},
			{
				title: 'Art Tenders',
				description: 'Choose between 6 or 24 pieces of our classic tenders',
				image: require('../../assets/media/pages/index/SuggestionConveyor/tenders.jpeg'),
				link: 'https://artofwings.revelup.online/',
				cost: '$8.99 - $26.99',
			},
		]
	},

	cnt3: {
		video: require('../../assets/media/pages/index/2ndhero.mp4'),
	},

	cnt4: {
		r1: {
			c2: {
				slideImgs: [
					require('../../assets/media/pages/index/GalleryPreview/1.jpg'),
					require('../../assets/media/pages/index/GalleryPreview/2.jpg'),
					require('../../assets/media/pages/index/GalleryPreview/3.jpg'),
					require('../../assets/media/pages/index/GalleryPreview/4.jpg'),
					require('../../assets/media/pages/index/GalleryPreview/5.jpg'),
					require('../../assets/media/pages/index/GalleryPreview/6.jpg'),
				]
			}
		}
	},

	cnt5: {
		imgLeft: require('../../assets/media/pages/index/ready-left.png'),
		imgRight: require('../../assets/media/pages/index/ready-right.png'),
	},
}