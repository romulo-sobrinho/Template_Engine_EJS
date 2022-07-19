const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000
const path = require('path')

let users = [
  {
    id: 0,
    name: "Rômulo Sobrinho",
    phone: "9999-9999"
  },
  {
    id: 1,
    name: "Renata Lemes",
    phone: "8888-8888"
  },
  {
    id: 2,
    name: "Maria Lívia",
    phone: "7777-7777"
  },
]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render('user', {users:users})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})