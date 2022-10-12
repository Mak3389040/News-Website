const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));


//Static files: Here we set the folders for static files
app.use(express.static("/public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));



// Templateing Engine setting
app.set("views", "./public/src/views"); // in reality the res.render of the news.js file is used to transfer the html or ejs file present in the views folder to the client.
//  But because of we create views folder in the src of public folder so we have to set the views directory as .public/src/views.
app.set("view engine", "ejs");

//Routes setting
const newsRouter = require("./public/src/routes/news"); // We can also use it without this by commenting it and

app.use("/", newsRouter);                               // we can use it directly with app.use("", async(req,res)=>{res.render("news");});
app.use("/article", newsRouter);


// listen on port
app.listen(PORT, ()=>{
  console.log(`The website is listening on http://localhost:${PORT}`)
});
