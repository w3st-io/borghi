// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const herokuSSLRedirect = require('heroku-ssl-redirect')
const mongoose = require('mongoose')
const path = require('path')


// [REQUIRE] Personal // Other // API // Pages //
const api_facebookAPI = require('./s-api/facebook/api')
const api_instagram = require('./s-api/instagram')
const api_redditAPI = require('./s-api/reddit/api')
const config = require('./s-config')
const Functionality = require('./s-middleware/Functionality')
const rateLimiter = require('./s-rate-limiters')

const a_ = require('./s-route/api')
const a_admin = require('./s-route/api/admin')
const a_admin_label = require('./s-route/api/admin/label')
const a_admin_orders = require('./s-route/api/admin/orders')
const a_admin_shopify_collectionGroup = require('./s-route/api/admin/shopify/collection-group')
const a_admin_shopify_product = require('./s-route/api/admin/shopify/product')
const a_admin_shopify_smartCollection = require('./s-route/api/admin/shopify/smart-collection')
const a_shopify_collectionGroup = require('./s-route/api/shopify/collection-group')

const p_ = require ('./s-route/pages')
const p_admin = require('./s-route/pages/admin')
const p_admin_shopify_product_analyze = require('./s-route/pages/admin/shopify/product/analyze')
const p_gallery = require('./s-route/pages/gallery')
const p_screener = require('./s-route/pages/screener')


// [INIT] Const //
const port = config.PORT


// [EXPRESS+SERVER] //
const app = express()
const server = http.createServer(app)


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.app.mongoURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(__dirname + '/s-static'))
app.use(rateLimiter.limiter)


// [USE] Personal - API //
app.use('/api', a_)
app.use('/api/admin', a_admin)
app.use('/api/admin/label', a_admin_label)
app.use('/api/admin/orders', a_admin_orders)
app.use('/api/admin/shopify/collection-group', a_admin_shopify_collectionGroup)
app.use('/api/admin/shopify/product', a_admin_shopify_product)
app.use('/api/admin/shopify/smart-collection', a_admin_shopify_smartCollection)
app.use('/api/shopify/collection-group', a_shopify_collectionGroup)

// [USE] Personal - Pages //
app.use('/pages', p_)
app.use('/pages/admin', p_admin)
app.use('/pages/admin/shopify/product/analyze', p_admin_shopify_product_analyze)
app.use('/pages/gallery', p_gallery)
app.use('/pages/screener', p_screener)



// [DEVELOPMENT] //
if (config.nodeENV == 'development') {
	// [FACEBOOK-LISTINGS] //
	//api_facebookAPI.loop()
	
	// [REDDIT-LISTINGS] //
	//api_redditAPI.update()
	//setInterval(() => { api_redditAPI.update() }, 30000)
}


// [INSTAGRAM-API] Loop every 30 seconds //
api_instagram.intializeInstagramAPI()
setInterval(() => { api_instagram.intializeInstagramAPI() }, 30000)


// [PRODUCTION][HEROKU] Set Static Folder for Heroku - SSL Redirect //
if (config.nodeENV == 'production') {
	app.use(express.static('client/dist'))
	
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}
app.use(herokuSSLRedirect.default())


// [LISTEN] //
server.listen(port, () => { console.log(`Server Running on Port: ${port}`) })
