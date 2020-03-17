const express = require('express');
const  mysql = require('mysql');

let users;
let con = mysql.createConnection({
  host: "2.59.118.74",
  user: "esfasoftware_guideap",
  password: "883..Fedai34",
  database: "esfasoftware_GuideDb"
});

let sqlsorgu ='SELECT * FROM Users';

function connetor(callback)
{
  con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
  callback();

  });
}

 function userget()
{
  con.query(sqlsorgu,function (errr,results,fieldss) {
    if (errr) throw errr;
console.log(results);
   users= results;
    router.res.send(users);
  });
}


let router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
connetor(userget);
console.log(users);


});

module.exports = router;
