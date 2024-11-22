const fs = require('fs')

console.log("inicio")

fs.writeFile('arwuivo.txt', 'oi', function(err){
  setTimeout(function(){
    console.log("arquivoCriado")
  },1000)
})

console.log("fim")