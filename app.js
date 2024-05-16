const fs = require("fs");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadData, saveData, addData } = require("./utils/readData");
const { title } = require("process");

const app = express();
const port = 3000;

const dataPath = "./data/data.json";

app.set("view engine", "ejs");
// app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    req.headers["bypass-tunnel-reminder"] = "any_value";
    res.render("Home", {
        title: "home",
    });
});

app.get("/done", (req, res) => {
    res.render("done", {
        title: "done",
    });
});

app.post("/", (req, res) => {
    addData(req.body);
    res.redirect("/done");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
