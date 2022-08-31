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
//mise a jour
router.put('/update',(request,response)=>{
  let ancienpass=request.body.ancienpass
  let a=request.body.password
  let c=request.body.id
  let d=request.body.login
  console.log(c)

  db.query(`SELECT mdp , login FROM membrepersonnel WHERE id_personnel='${c}' `,(err,result)=>{
    if(err) {
      console.log(err)
    }
    var string=JSON.stringify(result);
    var ajson =  JSON.parse(string);
    console.log(ajson)
    if (ajson[0].mdp==ancienpass && ajson[0].login==d ) {
      db.query(`UPDATE membrepersonnel SET  mdp='${a}' WHERE id_personnel='${c}'` ,(err)=>{
        if(err) {response.send(false)
                  console.log(err)}
        else  return response.send(true)
    })
    } else {
      response.send(false)
    }
})

   /* db.query(`UPDATE membrepersonnel SET login ='${d}', mdp='${a}' WHERE id_personnel='${c}'` ,(err)=>{
      if(err) {response.send(false)
                console.log(err)}
      else  return response.send(true)
  })*/
  } )

// Exportation de la route ................................................

export default router
