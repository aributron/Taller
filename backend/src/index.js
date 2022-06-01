import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3001

// sistema prototipo

app.post('/api/login', (req,res) => {

  // simulo traer un usuario de la base de datos
  // este prototipo es monousuario para este ejemplo
  console.log(req.body);
  const usuario = { email : 'test@test.com' , password : '123456'};
  if ( req.body && req.body.email == usuario.email && req.body.password == usuario.password ) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }

})


// simulo una base de datos en memoria
// vendedores

const lista = [
  {codigo:100,nombre:"Correa de distribucion", precio: 12500},
  {codigo:101,nombre:"Bateria", precio: 6000}
];

const vehiculos = [
  {id:0, patente: "ABC123", modelo: "Gol", estado: "En proceso"}
];

const repuestos = [
  {codigo: 1, nombre: "Correa de distribucion", precio: 3000},
  {codigo: 2, nombre: "Radiador", precio: 2500},
  {codigo: 3, nombre: "Volante", precio: 2800}
];

const trabajos = [
  {vehiculo: 
    {id:0, patente: "ABC123", modelo: "Gol", estado: "En proceso"}, 
  repuestos: []}
];

//sacar estado de vehiculo y ponerselo a trabajos.

app.get('/api/lista', (req,res) => {
  // CONSULTA A BASE DE DATOS
  res.json(lista);
})

app.get('/api/vehiculos', (req,res) => {
  // CONSULTA A BASE DE DATOS
  res.json(vehiculos);
})

app.get('/api/repuestos', (req,res) => {
  // CONSULTA A BASE DE DATOS
  res.json(repuestos);
})

app.get('/api/lista/:codigo', (req,res) => {
  const listaCopia = lista.filter( e => e.codigo == req.params.codigo )
  
  res.json(listaCopia);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/setrepuesto', (req,res) => {
  req.body.codigo = Number(req.body.codigo)
  lista.push(req.body);
})

app.post('/api/setvehiculo', (req,res) => {
  req.body.id = Number(req.body.id)
  vehiculos.push(req.body);
})

app.delete('/api/repuestos/:codigo', (req,res) => {
  const listaCodigos = lista.map( e => { return e.codigo } )
  const indice = listaCodigos.indexOf(Number(req.params.codigo))
  lista.splice(indice,1);
})

/*app.post('/api/setrepuesto', (req,res) => {
  // revisar
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
