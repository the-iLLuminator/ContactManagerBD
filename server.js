const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
//our first route
app.use("/api/contacts", require("./routes/contactRoute"));

app.listen(PORT, () => {
    console.log("server running on $(port)");
})
