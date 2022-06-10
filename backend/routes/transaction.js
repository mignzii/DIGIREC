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


// Exportation de la route ................................................

export default router
/*
 let values = [
      [request.body.id_encaissement,request.body.libelle,request.body.type,request.body.date,request.body.montant,request.body.num_etudiant,
      request.body.id_entreprise,request.body.id_fournisseur,request.body.facture,
      ]
  ]
  db.query('INSERT INTO transaction (id_encaissement,libelle,type,date,montant,num_etudiant,id_entreprise,id_fournisseur,id_facture) VALUES ?',[values],(err)=>{
      if(err) {response.send(false)
                console.log(err)}
      else response.send(true)
  })*/

  /*
  db.query("UPDATE etudiant SET totalversement = 'totalversement+request.body.montant', montantEtat = 'montant-totalversement' WHERE num_etudiant='request.body.num_etudiant'" ,(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  return response.send(true)
})
  */
