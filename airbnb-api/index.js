// 080201
const express = require('express')
const app = express()

app.listen(4000, () => console.log('Ready on port 4000'))

// 80202
app.get('/', (req, res) => res.send('Welcome to Airbnb API'))
