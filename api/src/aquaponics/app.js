const express = require('express')
const bodyParser = require('body-parser')
const firestore = require('./firestore')

const app = express()
app.use(bodyParser.json())

const collection = 'sensors'


app.get('/healthy', (req, res) => {
	res.status(200).send()
})

app.post('/aquaponics/:ts', async (req, res) => {
	await firestore.add(collection, req.body.data)
	res.status(200).send()	
})

app.get('/aquaponics', async (req, res) => {
	const data = await firestore.get(collection)
	res.status(200).send(data)
})
