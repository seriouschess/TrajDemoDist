
const express = require("express"); //using/import statement
const app = express();

app.use(express.static( __dirname + '/build' ));

app.use(express.urlencoded({extended: true}));
//app.use(express.json());

app.all("*", (req,res,next) => { //angular routes
    res.sendFile(path.resolve("./build/index.html"))
  });

app.listen(5000, () => console.log("listening on port 5000"));
