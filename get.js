const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require("./Routes/routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGOURI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Database Connected!");
});

app.use("/api", router);

if(process.env.NODE_ENV === 'production'){

    const path =  require('path');

    app.get("/" , (req,res)=>{
      app.use(express.static(path.resolve(__dirname,'client','build','index.html')))
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}

app.listen(process.env.PORT || 7074, () => {
  console.log("Server Running...");
});
