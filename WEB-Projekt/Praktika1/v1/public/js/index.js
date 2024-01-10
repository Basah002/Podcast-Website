
/*let Kachelansicht = document.getElementById("btn1");

Kachelansicht.addEventListener("click",function(){
    document.querySelector("").remove();
   if(document.getElementById("btn1").textContent=="Kachelansicht"){
    document.getElementById("btn1").textContent="Listenansicht";
    document.getElementById("btn1").after(document.createElement("ul")) ;
    document.querySelector("ul").append(document.createElement("li"));
    document.querySelector("li").append(document.createElement("a"));
    document.querySelectorAll("a")[4].id="PodcastLink";
    document.getElementById("PodcastLink").href="/Users/batuhansahin/Desktop/WEB/WEB-Projekt/Praktika1/podcast.html";
    document.getElementById("PodcastLink").textContent="Die drei Fragezeichen ";
    //document.getElementById("PodcastLink").="~ 286 Episoden";
    document.querySelector("ul").append(document.createElement("li"));
    document.querySelectorAll("li")[1].textContent="Harry Potter ~ 126 Episoden";
    document.querySelector("ul").append(document.createElement("li"));
    document.querySelectorAll("li")[2].textContent="Yurumi Gang ~ 26 Episoden";

   }
    else{

        document.getElementById("btn1").textContent="Kachelansicht";
        document.querySelector("ul").remove();
        
        
    }
    width="200" height="100" src="assets/img/DiedreiFragezeichen.jpeg"
                            alt="Ein Foto von den drei Fragezeichen"
});*/


window.addEventListener("load", function () {
    document.getElementById("btn1").textContent = "Kachelansicht";
    let tmp = 0;
    let anzahlLi = document.querySelectorAll("main li").length;

    document.getElementById("btn1").after(document.createElement("div"));
    document.querySelectorAll("div")[1].id = "kacheln";
    for (let i = 1; i <= anzahlLi; i++) {
        document.getElementById("kacheln").append(document.createElement("div"));
        document.querySelectorAll("main div")[i + 1].append(document.createElement("a"));
        document.querySelectorAll("a")[3 + i].href = "/WEB-Projekt/Praktika1/v0/podcast.html";
        document.querySelectorAll("a")[3 + i].append(document.createElement("img"));
        document.querySelectorAll("main img")[tmp].src = "assets/img/DiedreiFragezeichen.jpeg"
        document.querySelectorAll("main img")[tmp].width = "200";
        document.querySelectorAll(" main img")[tmp].height = "100";
        document.querySelectorAll("main img")[tmp].alt = "Ein Foto von den drei Fragezeichen";
        document.querySelectorAll("a")[3 + i].append(document.createElement("p"));
        document.querySelectorAll("main p")[tmp].textContent = document.getElementsByTagName("li")[tmp].textContent;
        tmp++;





    }
    document.getElementsByTagName("ul")[0].remove();

})

let button = document.getElementById("btn1");


button.addEventListener("click", function () {

    if (document.getElementById("btn1").textContent == "Kachelansicht") {
        let tmp = 0;
        document.getElementById("btn1").textContent = "Listenansicht";
        document.getElementById("btn1").after(document.createElement("ul"));
        document.getElementsByTagName("ul")[0].id = "liste";
        let anzahlKacheln = document.querySelectorAll("main div").length - 2;
        // console.log(anzahlKacheln);
        for (let i = 1; i < anzahlKacheln; i++) {
            if (i == 1) {
                document.getElementById("liste").append(document.createElement("li"));
                document.querySelectorAll("li")[tmp].append(document.createElement("a"));
                document.querySelector("li a").href = "/WEB-Projekt/Praktika1/v0/podcast.html";
                document.querySelector("li a").innerText = "Die drei Fragezeichen";
                document.querySelector("li a").after("~ 286 Episoden");
            }
            document.getElementById("liste").append(document.createElement("li"));
            document.querySelectorAll("li")[i].textContent = document.querySelectorAll(" main p")[i].textContent;
            tmp++;
        }
        document.getElementById("kacheln").remove();

    }
    else {
        document.getElementById("btn1").textContent = "Kachelansicht";
        let tmp = 0;
        let anzahlLi = document.querySelectorAll("main li").length;

        document.getElementById("btn1").after(document.createElement("div"));
        document.querySelectorAll("div")[1].id = "kacheln";
        for (let i = 1; i <= anzahlLi; i++) {
            document.getElementById("kacheln").append(document.createElement("div"));
            document.querySelectorAll("main div")[i + 1].append(document.createElement("a"));
            document.querySelectorAll("a")[3 + i].href = "/WEB-Projekt/Praktika1/v0/podcast.html";
            document.querySelectorAll("a")[3 + i].append(document.createElement("img"));
            document.querySelectorAll("main img")[tmp].src = "assets/img/DiedreiFragezeichen.jpeg"
            document.querySelectorAll("main img")[tmp].width = "200";
            document.querySelectorAll(" main img")[tmp].height = "100";
            document.querySelectorAll("main img")[tmp].alt = "Ein Foto von den drei Fragezeichen";
            document.querySelectorAll("a")[3 + i].append(document.createElement("p"));
            document.querySelectorAll("main p")[tmp].textContent = document.getElementsByTagName("li")[tmp].textContent;
            tmp++;

        }
        document.getElementsByTagName("ul")[0].remove();
    }


});

