// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { table } = require("console");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
    {
        name: "Yoda",
        phoneNumber: "900900",
        email: "Jedi@Master.com",
        id: 900,
    },
    {
        name: "Yoda",
        phoneNumber: "900900",
        email: "Jedi@Master.com",
        id: 900,
    },
    {
        name: "Yoda",
        phoneNumber: "900900",
        email: "Jedi@Master.com",
        id: 900,
    },
    {
        name: "Yoda",
        phoneNumber: "900900",
        email: "Jedi@Master.com",
        id: 900,
    },
];

var waitlist = [

]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays all characters
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays a single character, or returns false
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
});

// Create New Characters - takes in JSON input
app.post("/api/waitlist", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    waitlist.push(newTable);

    res.json(newTable);
});

app.delete("/api/tables", function (req, res) {
    tables = [];
    waitlist = [];
    console.log("test");
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
