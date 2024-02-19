const connectToMongo = require('./db')
const express = require('express')
connectToMongo();


const app = express()
// We changed the port because we wanted to run react.js on the 3000 port....
const port = 9000
var cors = require('cors')

app.use(express.json())
app.use(cors())


// // Available Routes
app.use('/api/userAuth',require('./routes/userAuth'))
// app.use('/api/userNotes',require('./routes/userNotes'))


app.get('/', (req, res) => {
  res.send('TaskManager App')
})

app.listen(port, () => {
  console.log(`TASKMANAGER APP listening at http://localhost:${port}`)
})