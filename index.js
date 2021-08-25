const express = require("express")


const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Ta funcionando a bagaça"})
})

console.log("Ta funfando")

app.listen(3333)