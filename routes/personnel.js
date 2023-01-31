// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'
import RootPath from 'app-root-path'
import multer from 'multer'
import path from 'path'

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

// multer middelwars
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, RootPath+'/image')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
});
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

  router.put("/updateprofile", upload.single('image'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        let d=req.body.id
        var imgsrc =  req.file.filename
        db.query(`UPDATE personnel SET  photo='${imgsrc}' WHERE id_personnel='${d}'` ,(err)=>{
          if(err) {res.send(false)
                    console.log(err)}
          else  return  res.send(true)
      })} })
  
  // route pour image
  router.get('/image/afficher/:imagelink',(request,response)=>{
    let values =request.params.imagelink
    console.log(values)
    console.log(RootPath+'/image/'+values)
    response.sendFile(RootPath+'/image/'+values)
  })
  

// Exportation de la route ................................................

export default router
