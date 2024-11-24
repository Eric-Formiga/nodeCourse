const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const UrlInfo =  require('url').parse(req.url, true)
  const name = UrlInfo.query.name

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  if(!name){
    res.end('<h1>Preencha seu nome!</h1> <form method="GET"><input type="texte" name="name"/><input type="submit" value="Enviar" /></form>')
  }else{
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
  }

})

server.listen(port, () => {
  console.log(`Servido rodando! ${port}`)
})