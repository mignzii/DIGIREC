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

router.get('/:idbailleur',(request,response)=>{
  let values = [
    [request.params.idbailleur]
]
  db.query('SELECT * FROM bailleur where id_bailleur=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
// recuperer id bailleur du dernier etudiant inscrit
router.get('/dernierbailleur/bailleurinscrit',(req,response)=>{
  db.query('SELECT MAX(id_bailleur) as derniercode FROM bailleur;',(err,result)=>{
    if (err) throw err
   else{
    let a=result[0].derniercode
    let b =a.replace("CEP","")
    response.json({message:b})
    console.log(b)
   }
  } )
} )
// inserer un etudiant
router.post('/postbailleur', (request,response)=>{
  let values = [
      [request.body.prenombailleur,request.body.nombailleur,request.body.numbailleur,
        request.body.telephone,request.body.email,
        request.body.poste,request.body.domicile,request.body.role,
        ]
  ]
  db.query('INSERT INTO bailleur (prenom,nom,id_bailleur,tel,mail,poste_occupe,adresse,role) VALUES ?', [values], (err)=>{
      if(err) {response.send(false)
      console.log(err)}
      else response.send(true)
  })

})

// Exportation de la route ................................................

export default router
