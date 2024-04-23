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