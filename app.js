const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let items = [];


//Day headline
app.get("/", (req, res) =>{
  var today = new Date();
  let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
  let day = days[today.getDay()];
  res.render("list", {kindOfDay: day, newListItems: items});
});

//getting the user postlist
app.post("/", (req, res) =>{
  var item = req.body.Item;
  items.push(item);
  res.redirect("/");


});

app.listen(3000,() =>{
  console.log("server started on port 3000");
});
