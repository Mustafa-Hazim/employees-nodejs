import express from 'express'
const app = express()

import router from './routes/main.js'

app.use('/', router)

app.listen(3000, (err) => {
    console.log('server running at : http://localhost:' +  3000)
})