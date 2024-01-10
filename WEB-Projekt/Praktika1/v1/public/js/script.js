
const getViewportWidth = () => window.innerWidth || document.documentElement.clientWidth;
//  screen.width=wieviele pixel das Gerät in der breite hat
//  innerwidth= viewport breite ->sicht fenster in pixel
//  innerHeight viewport hoehe ->sicht fenster in pixel
//  window.screen.height= Bildschirm hoehe in Pixel
//  clientwidth
//
//
console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);


let breite = screen.width; // pixel-breite des Geraetes


let text = "HEYY DUU, MACH MICH GROESSSSER!!!";


if (document.documentElement.clientWidth < screen.width * 0.30) {

    alert(`${text}`);
};
// Praktikum 9 Aufgabe 1

let Podcast = {
    titel: "Die drei ??? Fragezeichen",
    beschreibung: "Lorem Ipsum",
    autor: "Resul-Can-Süngüoglu",
    besitzerName: "Batuhan",
    besitzerEmail: "batuhan-resul@web.de",
    bildUrl: "document.getElementsByTagName(img)",
    feedUrl: "document.URL",
    kategorien: ["Technology", "Web-Engineering"], //
    letztesUpdate: new Date(document.lastModified)


}
//console.log(Podcast);
function Podcasts(titel, beschreibung, autor, besitzerName, besitzerEmail, kategorien = [], bildUrl, feedUrl) {

    //, bildUrl, feedUrl, letztesUpdate
    let date = new Date();


    this.titel = titel;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.besitzerName = besitzerName;
    this.besitzerEmail = besitzerEmail;
    this.bildUrl = bildUrl;
    this.feedUrl = feedUrl;
    this.kategorien = kategorien;
    this.letztesUpdate = new Date(document.lastModified);
    this.episoden = new Array();
    this.addEpisode = function (neueEpisiode) {
        this.episoden.push(neueEpisiode);


        this.episoden.sort(function (x, y) {
            return y.datum - x.datum;

        });
    }

}
let objekt1 = new Podcasts("hallo", "was geht", "kfsanfk", "sd", "ff", ["kategoerien", "resul", "batuhan"]);

//console.log(objekt1);
// Praktikum 9 Aufgabe 2
let dieEpisiode = {

    titel: "Die verlorene Seele",
    beschreibung: "die Seele ist verloren gegangen",
    dauer: 3960000,// BSP: 66 Minuten 1h 6 min
    date: new Date('Januar 18,2023 03:24:00'),
    //new Date(document.lastModified),

    getDauerInStundenUndMinuten: function () {

        let stunde = Math.floor(this.dauer / 1000 / 3600); //Stunden
        let minute = Math.floor((this.dauer / 1000 / 60) % 60); // Minuten
        //return b;
        return `${stunde}h ${minute}min`;
    }
}

// console.log(Episiode.getDauerInStundenUndMinuten());
// let urlid = new URL('WEB-Projekt/Praktika1/Die3Fragezeichen.mp4');





//let safsf=MimeTypeArray(newUrl);

let EpisiodeAudio = {
    url: "WEB-Projekt/Praktika1/Die3Fragezeichen.mp4",
    groesse: 236900,  //236.900 Bytes
    typ: "audio/mp4"

}


//console.log(EpisodeAudio.url.typ);
//console.log(EpisiodeAudio);


function EpisodenAudio(url, groesse, typ) {
    this.url = url,
        this.groesse = groesse,
        this.typ = typ = typ
}

function Episiode(titel, beschreibung, dauer, datum, episodeAudio) {
    this.titel = titel,
        this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = new Date(datum);
    this.episodeAudio=episodeAudio;
    this.getDauerInStundenUndMinuten = function () {

        let stunde = Math.floor(this.dauer / 1000 / 3600); //Stunden
        let minute = Math.floor((this.dauer / 1000 / 60) % 60); // Minuten
        //return b;
        return `${stunde}h ${minute}min`;
    }



}

Object.setPrototypeOf(Episiode, EpisiodeAudio);
// Praktikum 9 Aufgabe 3
Podcast.episoden = new Array();


Podcast.addEpisode = function (neueEpisiode) {
    Podcast.episoden.push(neueEpisiode);


    Podcast.episoden.sort(function (x, y) {
        return y.datum - x.datum;

    })
};



//console.log(Podcast.episoden);

// Praktikum 9 Aufgabe 4

let PodcastObjekt1 = new Podcasts("Ayyyyoubb", "mandarinenlord/süsser Junge,", "Die ElAmiris", "Mohammed", "abc@web.de", ["Krimi", "action", "Comedian"], "/süsserJunger", "/essenkray");
let PodcastObjekt2 = new Podcasts("Mohamet", "VirenSchleuder", "Aydogudu", "Adem", "abc2@web.de", ["Horror", "Thriller"], "/Nachtragend", "/Hafen");

let Podcastliste = new Array();
Podcastliste.push(PodcastObjekt1);
Podcastliste.push(PodcastObjekt2);

let objekt2 = new Episiode("objekt2", "beschreibung 1", 39603200, ('Januar 13,2023 03:24:00'));
let objekt3 = new Episiode("objekt3", "beschreibung 2", 396034200, ('Januar 12,2023 03:24:00'));
let objekt4 = new Episiode("objekt4", "beschreibung 3", 32344000, ('Januar 14,2023 03:24:00'));
PodcastObjekt1.addEpisode(dieEpisiode);
PodcastObjekt1.addEpisode(objekt3);
PodcastObjekt2.addEpisode(objekt2);
PodcastObjekt2.addEpisode(objekt4);

function laufe() {

    for (let index = 0; index < Podcastliste.length; index++) {
        console.log(`${Podcastliste[index].titel}: `);
        for (let j = 0; j < Podcastliste[index].episoden.length; j++) {


            console.log(`${Podcastliste[index].episoden[j].titel}  ${Podcastliste[index].episoden[j].getDauerInStundenUndMinuten()}`);
        }

    }
}

//console.log(laufe());
// Praktikum 10 Aufgabe 1
