const express = require("express");
const app = express();
const PORT = 5000;


// Home page for app 
app.get("/", (req, res) => {
    res.send("hellow world");
});

// about page 
app.get("/about", (req, res) => {
    res.send("hellow world this is about page");
});

// adding html element 
app.get("/html", (req, res) => {
    res.write("<h2>This is a h2 tag in html</h2>");
});

// json fake data loding 
app.get("/jsondata", (req, res) => {
    res.send({
        id: 1,
        name: "istiak",
    });
});

// listening port on webpage http url req 
app.listen(PORT, () => {
    console.log(`listining port are ${5000}`);
});