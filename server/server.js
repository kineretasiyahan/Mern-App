const dotenv = require('dotenv').config();
const cors=require('cors')
const express = require('express');
const app = express();
// const mongoClient = require('mongodb').MongoClient;
// const MONGOURL = "mongodb+srv://kineret:Aa123456!@cluster0.udluj.mongodb.net/myFirstDataBase?retryWrites=true&w=majority";
const moongoseDb =require('./Db/index');
const personRouter=require('./Routes/PersonRouter')
const path = require('path')
const PORT = process.env.PORT || 8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
moongoseDb.on("error",()=>{console.log("moongose error")})

// mongoClient.connect(MONGOURL, (error, connection) => {
//     if (error) console.log(error);
//     console.log("connect")})

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log("succses");
});
// app.get('/', (req, res) => {
//     res.send("sucsses");
// })
app.use('/api/person',personRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}