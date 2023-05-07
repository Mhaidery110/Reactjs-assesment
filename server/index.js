const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mhaidery@110",
  database: "details",
});

db.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

// ---------------setup ends here-------------//

// API starts from here

// 1. get request

app.get("/", (req, res) => {
  res.send("hello there");
  console.log("hello there");
});

app.get("/read", (req, res) => {
  const q = "SELECT * FROM personal";
  db.query(q, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// 2. post request

app.post("/post", (req, res) => {
  console.log(req.body);

  // personal section
  const name = req.body.name;
  const dob = req.body.dob;
  const sex = req.body.sex;
  const mobile = req.body.mobile;
  const govId = req.body.govId;
  const idNumber = req.body.idNumber;

  // Guardian section
  const glabel = req.body.glabel;
  const gaurdian = req.body.gaurdian;
  const gemail = req.body.gemail;
  const gcontact = req.body.gcontact;

  // address and contact
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const pin = req.body.pin;

  // other details section

  const occ = req.body.occ;
  const religion = req.body.religion;
  const marital = req.body.marital;
  const blood = req.body.blood;
  const nation = req.body.nation;

  const q =
    "INSERT INTO personal (`name`, `dob`, `sex`, `mobile`, `idNumber`, `govId`,`glabel`,`gaurdian`, `gemail`, `gcontact`,`address`, `city`, `state`, `country`, `pin`, `occ`, `religion`, `marital`, `blood`, `nation` ) VALUES(?)";
  const VALUES = [
    name,
    dob,
    sex,
    mobile,
    idNumber,
    govId,
    glabel,
    gaurdian,
    gemail,
    gcontact,
    address,
    city,
    state,
    country,
    pin,
    occ,
    religion,
    marital,
    blood,
    nation,
  ];
  db.query(q, [VALUES], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM personal WHERE ID = ?";

  db.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.send("Deleted Succesfully", id);
});

// app listening code
app.listen(5000, () => {
  console.log("app has started on port 5000");
});
