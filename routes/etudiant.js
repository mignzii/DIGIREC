// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'
import RootPath from 'app-root-path'
import multer from 'multer'
import path from 'path'
import Excel from 'exceljs'


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
// middelware multer
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'image/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
      callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
});

// Methodes export excel ....................................................
function createExcelFile() {
  // Create a new workbook
  const workbook = new Excel.Workbook();

  // Add a sheet to the workbook
  const sheet = workbook.addWorksheet('Sheet1');

  // Set the column names
  sheet.columns = [
    { header: 'Classe', key: 'classe' },
    { header: 'Prévisionnel', key: 'montanttotalformation' },
    { header: 'CA', key: 'totalversclasse' },
    { header: 'A Recouvrer', key: 'totalvers' },
    
  
  ];

  // Query the database to retrieve the data
  db.query('SELECT SUM(montant)as montanttotalformation,SUM(totalversement)as totalversclasse,SUM(montantEtat)as totalvers ,classe FROM etudiant GROUP BY classe', (error, results) => {
    if (error) throw error;

    // Add the data to the sheet
    sheet.addRows(results);

    // Save the workbook to an Excel file
    workbook.xlsx.writeFile('file.xlsx').then(() => {
      console.log('Excel file created successfully.');
    });
  });
}
router.get('/download', (req, res) => {
  createExcelFile();
  res.sendFile(RootPath+'/file.xlsx', (error) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Excel file downloaded successfully.');
    }
  });
});


// Les routes disponibles .................................................

router.get('/:idetudiant',(request,response)=>{
  let values = [
    [request.params.idetudiant]
]
  db.query('SELECT * FROM etudiant where num_etudiant=?',[values], (err,result)=>{
    if(err) throw err
    response.send(result)
})
// route pour image
  router.get('/image/afficher/:imagelink',(request,response)=>{
    let values =request.params.imagelink
    console.log(values)
    console.log(RootPath+'/image/'+values)
    response.sendFile(RootPath+'/image/'+values)
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
// recuperer id etudiant du dernier etudiant inscrit
router.get('/dernieretudiant/inscrit/annee',(req,response)=>{
  db.query('SELECT MAX(num_etudiant) as derniercode FROM etudiant;',(err,result)=>{
    if (err) throw err
   else{
    let a=result[0].derniercode
    let b =a.replace("CE","")
    response.json({message:b})
    console.log(b)
   }
  } )
} )
// inserer un etudiant
// test insretion d'image 
router.post('/envoyerimage',upload.single('image'), (request,response)=>{
  if (!request.file) {
    console.log("No file upload");
}else{
  console.log("bien")
}
} )
router.post('/postetudiant', upload.single('image'), (request,response)=>{
  if (!request.file) {
    console.log("No file upload");
}else{
  console.log(request.file.filename)
 let imgsrc =  request.file.filename
  let values = [
      [request.body.prenom,request.body.nom,request.body.carte,
        request.body.telephone,request.body.email, request.body.adresse,request.body.datenaiss,
        request.body.pays,request.body.classe,request.body.formation,
        request.body.montant,request.body.annee,request.body.bailleur,
        imgsrc ,request.body.statut]
  ]
  db.query('INSERT INTO etudiant (prenom,nom,num_etudiant,telephone,email, Adreesse,dateNaiss,nationalite,classe,formation,montant,annee_scolaire,id_bailleur,photo ,statut) VALUES ?', [values], (err)=>{
      if(err) {response.send(false)
      console.log(err)}
      else response.send(true)
  })
}
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
//requete d 'update etudiant

router.put('/updateetuidant',(request,reponse)=>{
  
   let vprenom=request.body.prenom
   let vnom =request.body.nom
   let vcarte=request.body.carte
   let vtelelephone=request.body.telephone
   let vemail= request.body.email
   let vadresse=request.body.adresse
   let vdatenaissa= request.body.datenaiss
   let vpays=request.body.pays
   let vclasse=request.body.classe
   let vformation=request.body.formation
   let vmontant= request.body.montant
   let vannee= request.body.annee
   let vbailleur =request.body.bailleur
   let vimage= request.body.imgsrc
   db.query(`UPDATE etudiant SET prenom=${vprenom},nom=${vnom},num_etudiant=${vcarte},telephone=${vtelelephone},email=${vemail}, Adreesse=${vadresse}
   ,dateNaiss=${vdatenaissa},nationalite=${vpays},classe=${vclasse},formation=${vformation},montant=${vmontant},annee_scolaire=${vannee},id_bailleur=${vbailleur},photo=${vimage} WHERE num_etudiant='${vcarte}'` ,(err)=>{
    if(err) {reponse.send(false)
              console.log(err)}
    else  return reponse.send(true)
})
})

// Exportation de la route ................................................

export default router
