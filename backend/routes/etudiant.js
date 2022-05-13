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

router.get('/:idetudiant',(request,response)=>{
  let values = [
    [request.params.idetudiant]
]
  db.query('SELECT * FROM etudiant where num_etudiant=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
// liste des debiteurs avec selection
router.get('/',(req,response)=>{
  db.query("SELECT * FROM etudiant where etatSolde='debiteur' ",(err,result)=>{
    if (err) throw err
    response.send(result)
    console.log('result')
  } )
} )
// mise a jour etudiant
router.put('/mign',(request,response)=>{
let a=request.body.totalvers
let b=request.body.montantEtat
let c=request.body.num_etudiant
let d=request.body.nbredevers
  db.query(`UPDATE etudiant SET totalversement =${a} , montantEtat =${b} , nbredeversement=${d} WHERE num_etudiant='${c}'` ,(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  return response.send(true)
})
} )
// Exportation de la route ................................................

export default router
