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

const vehiculos = [
  {id:1, patente: "ABC123", modelo: "Gol", clienteId: 1},
  {id:2, patente: "EEE111", modelo: "Corsa", clienteId: 2},
  {id:3, patente: "CCC333", modelo: "Uno", clienteId: 3}
];

const repuestos = [
  {codigo: 1, nombre: "Correa de distribucion", precio: 3000},
  {codigo: 2, nombre: "Radiador", precio: 2500},
  {codigo: 3, nombre: "Volante", precio: 2800},
  {codigo: 4, nombre: "Bujia", precio: 3200},
  {codigo: 5, nombre: "Aceite", precio: 1000},
  {codigo: 6, nombre: "Caño de escape", precio: 5000}
];

const trabajos = [
  { id: 0, 
    vehiculo: {id:0, patente: "ABC123", modelo: "Gol"}, 
    estado: "En proceso",
    repuestos: [{codigo: 2, nombre: "Radiador", precio: 2500}],
    total: 4500
  }
];

const clientes = [
  {
    id: 1, nombre: "John", apellido: "Doe", tel: "1234566789"
  },
  {
    id: 2, nombre: "Juan", apellido: "Dominguez", tel: "1234567891"
  },
  {
    id: 3, nombre: "Tito", apellido: "ElBambino", tel: "1234566987"
  }
]

app.get('/api/trabajos', (req,res) => {
  
  res.json(trabajos);
})

app.get('/api/vehiculos', (req,res) => {
  
  res.json(vehiculos);
})

app.get('/api/repuestos', (req,res) => {
  res.json(repuestos);
})

app.get('/api/clientes', (req,res) => {
  res.json(clientes);
})

app.get('/api/vehiculos/:patente', (req,res) => {
  const listaCopia = vehiculos.filter( e => e.patente == req.params.patente )
  res.json(listaCopia);
  
})

app.get('/api/clientes/:id', (req,res) => {
  const listaCopia = clientes.filter( e => e.id == req.params.id )
  res.json(listaCopia);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/setrepuesto', (req,res) => {
  req.body.codigo = Number(req.body.codigo)
  lista.push(req.body);
})

app.post('/api/settrabajo', (req,res) => {
  req.body.id = Number(req.body.id)
  trabajos.push(req.body);
})

app.post('/api/setvehiculo', (req,res) => {
  req.body.id = Number(req.body.id)
  vehiculos.push(req.body);
})

app.post('/api/setcliente', (req,res) => {
  req.body.id = Number(req.body.id)
  clientes.push(req.body);
})

app.delete('/api/repuestos/:codigo', (req,res) => {
  const listaCodigos = lista.map( e => { return e.codigo } )
  const indice = listaCodigos.indexOf(Number(req.params.codigo))
  lista.splice(indice,1);
})

app.delete('/api/trabajos/:id', (req,res) => {
  const listaIds = trabajos.map( e => { return e.id } )
  const indice = listaIds.indexOf(Number(req.params.id))
  trabajos.splice(indice,1);
})

app.delete('/api/clientes/:id', (req,res) => {
  const listaIds = clientes.map( e => { return e.id } )
  const indice = listaIds.indexOf(Number(req.params.id))
  clientes.splice(indice,1);
})

app.delete('/api/vehiculos/:id', (req,res) => {
  const listaIds = vehiculos.map( e => { return e.id } )
  const indice = listaIds.indexOf(Number(req.params.id))
  vehiculos.splice(indice,1);
})

app.patch('/api/updateTrabajo/:id', (req,res) => {
  
  const listaIds = trabajos.map( e => { return e.id } )
  const indice = listaIds.indexOf(Number(req.params.id))
  trabajos[indice].estado = "Finalizado";
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*app.patch('/api/trabajos/:id', (req,res) => {
  const listaCopia = trabajos.filter( e => e.id == req.params.id );

  res.json(listaCopia);
})
*/

