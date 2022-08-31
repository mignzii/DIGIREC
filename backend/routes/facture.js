// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'

// Creation des variables ................................................

const router = express.Router()
const db = mysql.createConnection({
  host: "mysql-digirec-esmt.alwaysdata.net",
  user: "279564",
  password: "Petiteecole2022",
  database: "digirec-esmt_digirec_esmt"
})
db.connect((err) =>{
    if(err) throw err
    console.log("Connexion DB: OK")
})

// Les routes disponibles .................................................

router.post('/', (request,response)=>{
  let values1 = [
    [request.body.libelle,request.body.date_emission,request.body.num_etudiant,
    request.body.id_fournisseur, request.body.montant]
]
db.query('INSERT INTO facture (libelle,date_emission,num_etudiant,id_fournisseur,montantcredit) VALUES ?',[values1],(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  response.send(true)
})
})

router.post('/debiteur', (request,response)=>{
  let values1 = [
    [request.body.libelle,request.body.montant,request.body.date_emission,request.body.num_etudiant,
    request.body.id_fournisseur]
]
db.query('INSERT INTO facture (libelle,montant,date_emission,num_etudiant,id_fournisseur) VALUES ?',[values1],(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  response.send(true)
})
})
router.get('/getfacture',(req,response)=>{
  db.query('Select * from facture', (err,resultat)=>{
    if(!err){
      response.send(resultat)
    }
    else{
      response.send(false)
    }
  } )
})

router.get('/maxfacture',(req,reponse)=>{
  db.query('SELECT MAX(id_facture) as idfacture FROM facture' ,(err,resultat)=>{
    if(!err){
      reponse.send(resultat)
    }else reponse.send("tableau vide")
  })
})

// Exportation de la route ................................................

export default router
