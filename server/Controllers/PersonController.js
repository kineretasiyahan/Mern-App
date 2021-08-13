const personModel = require('../Models/PersonModel');

async function getPersons(req, res) {
    try {
        await personModel.find({}, (error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "sucsses getPersons", data: result });
        })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in getPersons" }
        res.json(errorMsg.massage)
    }
}

async function getPersonByName(req, res) {
    try {
        await personModel.find({firstName:req.params.firstName}, (error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "sucsses", data: result });
        })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in getPersonsByName" }
        res.json(errorMsg.massage)
    }
}
async function createPerson(req, res) {
    try {
        await personModel.insertMany(req.body.person, (error, result) => {
                if (error) throw error;
                res.json({ massage: "success", data:req.body.person });
            })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in createPerson" }
        res.json(errorMsg.massage)
    }
}
async function putPerson(req, res) {
    try {
        await personModel.findByIdAndUpdate(req.params.id,req.body.person,(error, result) => {
                if (error) throw error;
                console.log(result)
                res.json({ massage: "success", data: result});
            })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in putPerson" }
        res.json(errorMsg.massage)
    }
}
async function deletePerson(req, res) {
    try {
        await personModel.findByIdAndDelete(req.params.id,(error, result) => {
            if (error) throw error;
            console.log(result)
            res.json({ massage: "delete sucsses" });
        })
    }
    catch (err) {
        const errorMsg = { error: err, massage: "error in deletePerson"} 
        res.json(errorMsg.massage) 
    }
}
module.exports={ getPersons, createPerson, putPerson, deletePerson, getPersonByName };