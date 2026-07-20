require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT;
const Connect = require("./src/config/database")

Connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(require("./src/config/corsConfig")))

app.use(require("./src/routes/authentication"))

app.get("/", (req,res) => {
    res.send('working')
})


app.listen(PORT, () => console.log("Server is running on port " + PORT));