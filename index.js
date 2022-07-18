const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000
const path = require('path')

let user = {
  id: "as13ED",
  name: "Rômulo Sobrinho",
  phone: "9999-9999"
}

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render('user', {id: user.id, name: user.name, phone: user.phone})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})