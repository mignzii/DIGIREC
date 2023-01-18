// Importation des modules ...............................................

import express from 'express'
import mysql from 'mysql'
import Excel from 'exceljs'
import RootPath from 'app-root-path'

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
// Methodes export excel ....................................................
function createExcelFile() {
  // Create a new workbook
  const workbook = new Excel.Workbook();

  // Add a sheet to the workbook
  const sheet = workbook.addWorksheet('Sheet1');

  // Set the column names
  sheet.columns = [
    { header: 'Journal', key: 'date_emission' },
    { header: 'Identifiant', key: 'num_etudiant' },
    { header: 'N° Piéce', key: 'id_facture' },
    { header: 'Date', key: 'date_emission' },
    { header: 'Libellé', key: 'libelle' },
    { header: 'Compte Général', key: 'montantEtat' },
    { header: 'Debit', key: 'montant' },
    { header: 'Crédit', key: 'montantcredit' },
  ];

  // Query the database to retrieve the data
  db.query('Select * from facture', (error, results) => {
    if (error) throw error;

    // Add the data to the sheet
    sheet.addRows(results);

    // Save the workbook to an Excel file
    workbook.xlsx.writeFile('file.xlsx').then(() => {
      console.log('Excel file created successfully.');
    });
  });
}

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
      console.log(err)
      response.send(false)
    }
  } )
})
router.get('/onefacture/:idetudiant',(req,response)=>{
  let values = [
    [req.params.idetudiant]
]
  db.query('SELECT * FROM facture where num_etudiant=?',[values], (err,resultat)=>{
    if(!err){
      response.send(resultat)
    }
    else{
      console.log(err)
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
router.get('/download', (req, res) => {
  createExcelFile();
  res.send(true)
});
//---------------------------------------------
router.get('/downloadfile', (req, res) => {
  
  res.sendFile(RootPath+'/file.xlsx', (error) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Excel file downloaded successfully.');
    }
  });
});

// Exportation de la route ................................................

export default router
