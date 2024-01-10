const parser = require("./podcastParser");
const fs = require("fs");

// [TODO]
// Hier Ihren Code zu den Objekten "Podcast", "Episode" und "EpisodeAudio" 
// aus Praktikum 9 hinein (ohne Beispieldaten!) hineinkopieren
function Podcasts(titel, beschreibung, autor, besitzerName, besitzerEmail, kategorien = [], letzesUpdate,bildUrl, feedUrl) {

  //, bildUrl, feedUrl, letztesUpdate


  this.titel = titel;
  this.beschreibung = beschreibung;
  this.autor = autor;
  this.besitzerName = besitzerName;
  this.besitzerEmail = besitzerEmail;
  this.bildUrl = bildUrl;
  this.feedUrl = feedUrl;
  this.kategorien = kategorien;
  this.letztesUpdate = letzesUpdate;
  this.episoden = [];
  this.addEpisode = function (neueEpisiode) {
    this.episoden.push(neueEpisiode);


    this.episoden.sort(function (x, y) {
      return y.datum - x.datum;

    });
  }

}


function Episiode(titel, beschreibung, dauer, datum) {
  this.titel = titel,
    this.beschreibung = beschreibung;
  this.dauer = dauer;
  this.datum = datum;

  this.getDauerInStundenUndMinuten = function () {

    let stunde = Math.floor(this.dauer / 1000 / 3600); //Stunden
    let minute = Math.floor((this.dauer / 1000 / 60) % 60); // Minuten
    //return b;
    return `${stunde}h ${minute}min`;
  }

}


function EpisodenAudio(url, groesse, typ) {
  this.url = url,
    this.groesse = groesse,
    this.typ = typ = typ
}

const podcasts = [];

/**
 * Abonniert einen Podcast, indem die Daten von der gegebenen Feed-URL
 * importiert werden. Der Import selbst erfolgt asynchron, daher wird
 * fuer Folgetaetigkeiten eine Callback-Funktion benötigt.
 *
 * @param {String} url Die Feed-URL des Podcasts, welcher abonniert werden soll.
 * @param {Function} callback Callback-Funktion, die festlegt, was nach erfolgtem
 *                            Import passieren soll.
 */
function abonnieren(url, callback) {
  parser.parseFeed(url, (feed) => {
    podcasts.push(konvertieren(url, feed));
    if (callback) callback();
  });
}



/**
 * Konvertiert die von einer URL importierten Feed-Daten in fuer diese Web-
 * Anwendung passende Datenobjekte (Podcast, Episode, EpisodeAudio)
 *
 * @param {String} url Die Feed-URL des Podcasts, von welcher importiert wurde.
 * @param {Object} feed Feed-Objekt gemaess https://www.npmjs.com/package/podcast-feed-parser#default
 */


function konvertieren(url, feed) {
  // [TODO]
  // Funktion implementieren
  let podcast= new Podcasts(feed.meta.title, feed.meta.description, feed.meta.author, feed.meta.owner.name, feed.meta.owner.mail, feed.meta.categories,feed.meta.lastUpdated, feed.meta.imageURL, url);

      
    for(let i=0;i<feed.episodes.length;i++)
    podcast.addEpisode(new Episiode(feed.episodes[i].title,feed.episodes[i].description,feed.episodes[i].duration,feed.episodes[i].pubDate));

    return podcast;
}


// [TODO]
// Schnittstelle des Moduls definieren: Podcast-Array und abonnieren-Funktion
// von außen zugreifbar machen

module.exports.podcasts = podcasts;
module.exports.abonnieren = abonnieren;