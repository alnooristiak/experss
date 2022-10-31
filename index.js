const express = require("express");
const app = express();

// Home page for app 
app.get("/", (req, res) => {
    res.send("hellow world");
});

// about page 
app.get("/about", (req, res) => {
    res.send("hellow world this is about page");
});


// listening port on webpage http url req 
app.listen(5000, () => {
    console.log("listining port are 5000");
});