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
})// liste montant previsionel
router.get('/test/montantprevisionnel',(request,response)=>{
  db.query('SELECT SUM(montant)as montanttotalformation,SUM(totalversement)as totalversclasse,SUM(montantEtat)as totalvers ,classe FROM etudiant GROUP BY classe', (err,result)=>{
    if(err) throw err
    response.send(result)
})
})

// previsionnel total
router.get('/test4/totalmontant',(request,response)=>{
  db.query('SELECT SUM(montant)as previsionnel, SUM(totalversement)as totalverserclasse, SUM(montantEtat)as totalverser, classe FROM etudiant ', (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
// Chiffres d'affaires



// liste des debiteurs avec selection
router.get('/',(req,response)=>{
  db.query("SELECT * FROM etudiant where etatSolde='debiteur' ",(err,result)=>{
    if (err) throw err
    response.send(result)
    console.log('result')
  } )
} )
// inserer un etudiant
router.post('/', (request,response)=>{
  let values = [
      [request.body.reservation_id,request.body.menu_id,request.body.quantite]
  ]
  db.query('INSERT INTO detailReservations (reservation_id,menu_id,quantite) VALUES ?', [values], (err)=>{
      if(err) response.send(false)
      else response.send(true)
  })
})
// mise a jour etudiant
router.put('/mign',(request,response)=>{
let a=request.body.totalvers
let b=request.body.montantEtat
let c=request.body.num_etudiant
let d=request.body.nbredevers
let e=request.body.responsable
  db.query(`UPDATE etudiant SET totalversement =${a} , montantEtat =${b} , nbredeversement=${d} , responsable='${e}' WHERE num_etudiant='${c}'` ,(err)=>{
    if(err) {response.send(false)
              console.log(err)}
    else  return response.send(true)
})
} )
//requete de trie

// Exportation de la route ................................................

export default router
