// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'

// Creation des variables ................................................

const router = express.Router()
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "digirec_esmt"
})
db.connect((err) =>{
    if(err) throw err
    console.log("Connexion DB: OK")
})

// Les routes disponibles .................................................
router.get('/',(request,response)=>{
  db.query('SELECT * FROM personnel', (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
router.get('/:idpersonne',(request,response)=>{
  let values = [
    [request.params.idpersonne]
]
  db.query('SELECT * FROM personnel where id_personnel=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
})

// Exportation de la route ................................................

export default router
