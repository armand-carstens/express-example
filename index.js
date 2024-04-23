// Libraries
const express = require('express')
const app = express()
const port = 3000


// Call express to open route "localhost:3000/"
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// All express routes should listen for GET,POST,DELETE etc.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Now run node index.js
// -> Should say hello world on localhost:3000 :)




// These are the possible methods for routing in Step-2
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})