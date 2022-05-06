import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import entrepriseRoutes from './routes/entreprise.js'
import etudiantRoutes from './routes/etudiant.js'
import factureRoutes from './routes/facture.js'
import fournisseurRoutes from './routes/fournisseur.js'
import membrepersonnelRoutes from './routes/membrepersonnel.js'
import personnelRoutes from './routes/personnel.js'
import transactionRoutes from './routes/transaction.js'

// Creation de l'application ........................................

const app = express()
const PORT =  6001
app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// Activation des modules ...........................................

app.use(bodyParser.json())
app.use('/entreprise',entrepriseRoutes)
app.use('/etudiant',etudiantRoutes)
app.use('/facture',factureRoutes)
app.use('/fournisseur',fournisseurRoutes)
app.use('/membrepersonnel',membrepersonnelRoutes)
app.use('/personnel',personnelRoutes)
app.use('/transaction',transactionRoutes)

// Lancement de l'application .......................................

app.listen(PORT, ()=> console.log(`Le serveur fonctionne à l'adresse http://localhost:${PORT}`))

// Fin du Programme ...................................................
