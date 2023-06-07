const express = require('express');
const app = express();
//let port = 3000;
const fs=require("fs");
const https= require("https");
process.env.port = 3000;
const llavePrivada=fs.readFileSync("private.key");
const certificado=fs.readFileSync("certificate.crt");

const metPropiet = require("./Controladores/ContPropiet")
const metPropiedades = require("./Controladores/ContPropied")
const metArrendatarios = require("./Controladores/ContrArrend")
const metPersonas = require("./Controladores/ContPersona")

const credenciales ={

   key:llavePrivada,
     cert:certificado,
 passphrase:"a1234567"
};
app.get("/propietarios/:id", metPropiet.leerPropietario);
app.get("/propietarios", metPropiet.totalPropietarios);
app.post("/propietarios", metPropiet.CrearPropietario);
app.delete("/propietarios/:id", metPropiet.eliminarPropietario);

app.get("/arrendatarios/:id", metArrendatarios.leerArrendatario);
app.get("/arrendatarios", metArrendatarios.totalArrendatarios);
app.post("/arrendatarios", metArrendatarios.CrearArrendatario);
app.delete("/arrendatarios/:id", metArrendatarios.eliminarArrendatario);


app.post("/propiedades", metPropiedades.CrearPropiedad);
app.get("/propiedades", metPropiedades.totalPropiedades);
app.get("/propiedades/:id", metPropiedades.leerPropiedad);
app.delete("/propiedades/:id", metPropiedades.eliminarPropiedad);

app.post("/persona", metPersonas.CrearPersona);
app.get("/personas", metPersonas.totalPersonas);
app.get("/personas/:id", metPersonas.leerPersona);
app.delete("/personas/:id", metPersonas.eliminarPersona);

const httpsServer =https.createServer(credenciales,app);

httpsServer.listen(process.env.port,() =>{
    console.log('Servidor https escuchando por el puerto:',process.env.port);
}).on('error',err =>{
    console.log('Error al iniciar el servidor:',err);
});
/**
 *app.listen(port, () => {

  console.log('Server listo');
});

 */