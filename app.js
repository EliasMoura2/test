const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello'})
})

app.listen(3000, () => {
  console.log(`Server listen on port 3000`)
})