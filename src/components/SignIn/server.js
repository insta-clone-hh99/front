const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const corsOptions = {
    origin: 'http://13.124.84.17:8080',
    credentials: true,
}

app.use(cors(corsOptions))
