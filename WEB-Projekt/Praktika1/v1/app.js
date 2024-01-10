const express=require("express");
const app=express();
const Routing=require("./routes/routes");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(Routing);

app.listen(8020);