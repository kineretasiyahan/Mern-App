const mongoose = require("mongoose");
const MONGOURL = "mongodb://localhost:27017/dbblog";

mongoose.connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Mongoose sucsses") })
    .catch((error) => { console.error("connection error", error.message) })

const db = mongoose.connection
module.exports=db;