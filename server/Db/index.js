const mongoose = require("mongoose");
const MONGOURL = "mongodb+srv://kineret:Aa123456!@cluster0.udluj.mongodb.net/myFirstDataBase?retryWrites=true&w=majority";

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Mongoose sucsses") })
    .catch((error) => { console.error("connection error", error.message) })

const db = mongoose.connection
module.exports=db;