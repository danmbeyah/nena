'use strict'

const SwaggerExpress = require('swagger-express-mw')
const SwaggerUi = require('swagger-tools/middleware/swagger-ui')
const app = require('express')()
const helmet = require('helmet')

let config = require('dotenv').config()

module.exports = app

config = {
	appRoot: __dirname
}

SwaggerExpress.create(config, (err, swaggerExpress) => {
	if (err) { throw err }

	// install middleware
	app.use(helmet())
	app.use(SwaggerUi(swaggerExpress.runner.swagger))

	swaggerExpress.register(app)

	const port = process.env.PORT || 9001
	const host = process.env.HOST || '127.0.0.1'

	app.listen(port)

	if (swaggerExpress.runner.swagger.paths['/']) {
		console.log('Nena is running at '  + host + ':' + port)
	}
})
