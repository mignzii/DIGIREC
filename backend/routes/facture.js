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

router.post('/', (request,response)=>{
  let values1 = [
    [request.body.id_facture ,request.body.libelle,request.body.montant,request.body.date_emission,request.body.num_etudiant,
    request.body.id_fournisseur]
]
db.query('INSERT INTO facture (id_facture,libelle,montant,date_emission,num_etudiant,id_fournisseur) VALUES ?',[values1],(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  response.send(true)
})


})

// Exportation de la route ................................................

export default router
