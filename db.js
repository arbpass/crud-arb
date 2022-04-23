//connect with DB and define schema
const mongoose= require("mongoose");
const DB= "mongodb+srv://arb:arbmongo@cluster0.smtw9.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(DB, {
}).then(()=> {
    console.log("connection to database is successfull");
}).catch((e)=> {
    console.log(e);
})

const crudSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    notes: {
        type: String,
        required: true,
    }, 
});

const Crud= new mongoose.model("data", crudSchema);

module.exports= Crud;