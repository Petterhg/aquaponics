const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.GCP_PROJECT_ID
})

var db = firebase.firestore()

async function add (collection, data) {
	try {
		await db.collection(collection).add({ data })
	} catch (err) {
		throw err
	}
}

async function get (collection) {
	try {
		const data = await db.collection(collection).get()
		return data
	} catch (err) {
		throw err
	}
}

module.exports.add = add
module.exports.read = read
