// const path = require("path");
const express = require("express");
const app = express();
const PORT = 5000;

// builtin middleware 
// app.use(express.static());

// adding html page index page on route 
// const staticPath = path.join(__dirname, "./pages");
// app.use(express.static());
// console.log('path.join(__dirname, "./pages"');


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
    res.send([
    {
        id: 1,
        name: "istiak",
    },
    {
        id: 2,
        name: "istiak",
    },
    {
        id: 3,
        name: "istiak",
    },
    {
        id: 4,
        name: "istiak",
    },
    ]);
});

// listening port on webpage http url req 
app.listen(PORT, () => {
    console.log(`listining port are ${5000}`);
});