const express = require('express')
const app = express()
const artistRoutes = require('./routes/artistRoutes')
const jsonParser = require('body-parser').json

// ====== MIDDLEWARE ==========
app.use(jsonParser())
app.use('/artists',artistRoutes)

// ====== EXPRESS SERVER ==========
const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Express server is listening on port', port)
})
