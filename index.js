const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000
const path = require('path')

let employees = [
  {
    id: 0,
    name: "João Henrique",
    salary: 5000
  },
  {
    id: 1,
    name: "Renata Morais",
    salary: 6000
  },
  {
    id: 2,
    name: "Maria Lívia",
    salary: 7000
  },
  {
    id: 3,
    name: "Jonas Bruno",
    salary: 4000
  }
]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render('employees', {employees:employees})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})