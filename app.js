const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Doc = require("./schema");

mongoose
    .connect(
        "mongodb+srv://ARUSINGH:ARUSINGH@201900388-shivangisingh.xd0l1.mongodb.net/lab_13?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected");
    });

app.use(express.json());
let documents = new Array();
app.post("/", (req, res) => {
    documents = req.body.documents;
    res.send("Documents received!");
    for (let document of documents) {
        console.log(document);
        let newDocument = new Doc({
            student_name: document.name,
            registration_number: document.reg,
            marks: document.marks,
        });
        newDocument.save().then(() => {
            console.log("Document inserted into MongoDB");
        });
    }
});
app.listen(3000);