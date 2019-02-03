const express = require('express')
const app = express()

app.use(require('./aquaponics/app'))

module.exports = app
