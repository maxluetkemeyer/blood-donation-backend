import express from "express";
import bodyParser from "body-parser";

import {decrypt} from "./middlewares/decrypt.js";

const app = express();
const port = 3000;


app.use(bodyParser.text());
app.use(decrypt);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

