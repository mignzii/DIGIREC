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
  db.query('SELECT * FROM membrepersonnel', (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
router.get('/:username',(request,response)=>{
  let values = [
    [request.params.username]
]
  db.query('SELECT * FROM membrepersonnel where login=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
})
router.get('/image/test/:id',(request,reponse)=>{
 let a = request.params.id
 reponse.sendFile(RootPath.path+'/image/'+a)
})
//poster user

router.post("/post", upload.single('image'), (req, res) => {
  if (!req.file) {
      console.log("No file upload");
  } else {
      console.log(req.file.filename)
      let a= req.body.login
      let b=req.body.mdp
      let c=req.body.id
      let d=req.body.type
      var imgsrc = 'http://127.0.0.1:3000/image/' + req.file.filename
      var insertData = "INSERT INTO membrepersonnel VALUES(?,?,?,?,?)"
      db.query(insertData,[a,b,d ,c,imgsrc], (err, result) => {
          if (err) throw err
          console.log("file uploaded")
      })
  }
});
router.put("/updateprofile", upload.single('image'), (req, res) => {
  if (!req.file) {
      console.log("No file upload");
  } else {
      console.log(req.file.filename)
      let d=req.body.id
      var imgsrc =  req.file.filename
      db.query(`UPDATE membrepersonnel SET  photo='${imgsrc}' WHERE id_personnel='${d}'` ,(err)=>{
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
