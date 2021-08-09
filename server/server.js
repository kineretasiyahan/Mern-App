const dotenv = require('dotenv').config();
const PORT = process.env.PORT | 2300;
const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const MONGOURL = process.env.MONGOURL|"mongodb://localhost:27017/dbblog";
const moongoseDb =require('./Db/index');
const personRouter=require('./Routes/PersonRouter')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
moongoseDb.on("error",()=>{console.log("moongose error")})

mongoClient.connect(MONGOURL, (error, connection) => {
    if (error) console.log(error);
    console.log("connect")})

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log("succses");
});
app.get('/', (req, res) => {
    res.send("sucsses");
})

app.use('/person',personRouter)