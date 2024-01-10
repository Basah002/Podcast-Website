const express = require("express");
const db=require("../models/persistence");
const list=db.podcasts;

// [TODO]
// Weitere benoetigte Module einbinden
const router = express.Router();
const app=express();


router.get("/", function (req, res) {
  // [TODO]
  // Implementieren: Liste der abonnierten Podcasts anzeigen
  res.render("index",{liste:list});
 
  
  
});

router.get("/podcast", function (req, res) {
  // [TODO]
  // Implementieren: Detailseite zum Podcast mit dem gegebenen
  // Index anzeigen (Index als Anfrage/Query-Parameter gegeben,
  // Zugriff erfolgt mit: req.query.pc)
 
  
});

router.get("/episode", function (req, res) {
  // [TODO]
  // Implementieren: Detailseite zur Episode anzeigen (Indizes
  // als Anfrage/Query-Parameter gegeben, Zugriff erfolgt mit:
  // req.query.pc und req.query.ep)
});

router.post("/abonnieren", function (req, res) {
  // [TODO]
  // Implementieren: Abonnieren eines Podcasts
});

module.exports = router;
