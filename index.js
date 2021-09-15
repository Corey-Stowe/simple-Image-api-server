const fs = require("fs")
const express = require('express')
const app = express();
const randomFile = require('select-random-file')
const dir = __dirname+'/image/'
console.log(__dirname)
app.get("/url",async function(req,res){
  var items = fs.readFileSync(__dirname+"/image/",{encoding:'utf8', flag:'r'}).split("\n")
  var item = items[Math.floor(Math.random()*items.length)];
res.end(item)
})
app.get("/",async function(req,res){
  randomFile(dir, (err, file) => {
  res.sendFile(dir+file)
})
})
.listen(80, err => {
  if (err) throw err;
  console.log(`> The Image API server just started ;) <`);
});


