const http = require('http');
const app = require('./src/app.js');

http.createServer(app)

const port = process.env.PORT ?? 3030;

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port} http://localhost:${port}`);
});