
const http = require("http");
const db = require("../models/persistence");
const fs = require("fs");
const { log } = require("console");

db.abonnieren("https://wowirsindistvorne.show/feed/mp3/", () => {
    db.abonnieren("https://feeds.metaebene.me/lnp/m4a", () => {
        console.log("Podcasts importiert.");
    });
});

const server = http.createServer(function (request, response) {




    response.writeHead(200, { "content-type": "text/html; charset=utf-8" })

    console.log(db.podcasts);

    const html = `<!DOCTYPE html>
    <html>
    <head>
    <title>Hallo WEB1</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1>Aktuelle Podcasts mit deren Episoden!</h1>
    <p>${abc()}</p>
    </body>
    </html>`;

    response.end(html);




});
 function abc(){

    let list="";
    for(let i=0;i<db.podcasts.length;i++){
        list+="<hr>";
        list+=`${db.podcasts[i].titel} ${db.podcasts[i].beschreibung} <br>  <img src="${db.podcasts[i].bildUrl}" width="200" height="200">` ;
        for(let p=0;p<db.podcasts[i].episoden.length;p++){
            list+=`<ul><li>${db.podcasts[i].episoden[p].titel}</li></ul>`;
        }

    }

    return list;
}

server.listen(8844);

