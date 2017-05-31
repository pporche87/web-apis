const express = require('express')
const app = express()
const artistRoutes = require('./routes/artistRoutes')

const jsonParser = require('body-parser').json
const logger = require('morgan')

// ====== MIDDLEWARE ==========
app.use(logger('dev'))
app.use(jsonParser())

app.use('/artists',artistRoutes)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
})

// Error Handler
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({
		error: {
			message: err.message
		}
	})
})

// ====== EXPRESS SERVER ==========
const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Express server is listening on port', port)
})
