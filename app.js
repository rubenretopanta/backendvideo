import express from "express"; 
const app = express(); 
app.get("/", (req, res) => { 
res.send("Servidor pequeño funcionando correctamente!"); 
}); 
app.listen(4002, () => { 
console.log("Servidor mini-backend corriendo en puerto 4002"); 
});