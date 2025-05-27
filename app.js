
const express = require('express')

const app = express()
require('./database/connection')
const storeRouter = require('./routes/storeRouter')

const cors = require('cors')


app.use(express.json())
app.use(cors())

app.use('/api', storeRouter)







app.listen(3000, () => {
    console.log('server address http://localhost:3000');

})