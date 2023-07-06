const express = require('express')
const routerApi = require('./routes')
const app = express()
const PORT = 3001

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);


app.listen(PORT, () => {
  console.log('Mi port ' + PORT);
})

