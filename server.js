
const express = require("express"); //using/import statement
const app = express();

app.use(express.static( __dirname + '/dist' ));

app.use(express.urlencoded({extended: true}));
//app.use(express.json());

app.all("*", (req,res,next) => { //angular routes
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(5000, () => console.log("listening on port 5000"));
