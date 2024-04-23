// Libraries
const express = require('express')
const app = express()
const port = 3000

// Step-1
// Call express to open route "localhost:3000/"
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




// Now run node index.js
// -> Should say hello world on localhost:3000 :)




// Step-2
// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })


// Step-3
app.use(express.static('public'))
// uses the index.html as route

// All express routes should listen for GET,POST,DELETE etc.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})