
//Zona de guardado de variables

const express = require('express');
const bodyParser = require('body-parser');
const { message } = require('statuses');
const { render } = require('express/lib/response');
//const fetch =    (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require("path")
const childProcess = require("child_process")

comando = childProcess.spawn('cmd',['/c','ipconfig'])


var app = express()
var port = 3000;
contentInput = "null algo"
books = []
//Usos
app.set("view-engine","ejs");
app.set("views","./views")

app.use(bodyParser.urlencoded({ extended: true }));

//Metodos HTTPS

app.post("/key",  (req,res)=>{
   books.push(req.body.message)
  
   res.redirect("/")

})

app.get("/",(req,res)=>{
    res.render("index.ejs", {books})
})

app.get("/delete",(req,res)=>{
   books.shift()
  console.log(books.length)
  
   res.redirect("/")
    
})

//Llama archivos estaticos css JS para Copiado 
app.use(express.static(path.join(__dirname, 'public')));




//Configurar la escucha del puerto y comando para ver ip



app.listen(port, ()=>{
    console.log("cargado" + port)

    comando.stdout.on("data", function(datos){

          
        ip =   datos.toString().match(/\d.+[0-9]$/mg,)

         console.log("salida", ip)   
})

    comando.stderr.on("data",function(datos){
     console.log('error',datos)
    })

    comando.on('exit',function(codigo){
      console.log('el proceso ha finalizado codigo', codigo)
    })

})

