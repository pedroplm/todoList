const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let items = [];
let workItems = [];

//Day headline
app.get("/", (req, res) =>{
  let day = date.getDay();
  res.render("list", {listTitle: day, newListItems: items});
});

//getting the user postlist
app.post("/", (req, res) =>{
  let item = req.body.Item;

  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  if (req.body.remove === "remove"){
    items = [];
    res.redirect("/");
  }
});



//Work list page
app.get("/work", (req, res) =>{
  res.render("list", {listTitle: "Work List", newListItems: workItems});

});

app.post("/work", (req, res) =>{
  let item = req.body.Item;
  workItems.push(item);
  res.redirect("/work");
});

//About page
app.get("/about", (req, res) =>{
  res.render("about");
});

app.listen(process.env.PORT,() =>{
  console.log("server started");
});
