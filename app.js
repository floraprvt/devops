const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
	res.send('Coucou!');
});
 
app.listen(5001, () => {
	console.log('Le serveur ecoute sur le port 5001')
})