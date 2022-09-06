import express from "express";
import dayjs from "dayjs";

import planetsRoutes from "./routes/planets-Routes.js"

const app = express();

//TODO: Ajouter du code ici

app.get("/premiere", (req, res) => {
    res.status(200);
    res.set("Content-Type", "text/plain");
    res.send("Première route avec express");
});

app.get("/date", (req, res) => {
    res.status(200);
    res.set("Content-Type", "text/plain");
    const today = dayjs();
    res.send("Date: " + today.format());
});

app.get("/math/:operation", (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);

    const operation = req.params.operation;
    let resultat = 0;

    switch (operation) {
        case "somme":
            resultat = a + b;
            break;
        case "différence":
            resultat = a - b;
            break;
        case "produit":
            resultat = a * b;
            break;
        case "quotient":
            resultat = a / b;
            break;
    }




    res.status(200);
    res.set("Content-Type", "text/plain");
    res.send(resultat.toString());
});

app.use("/planets", planetsRoutes)

export default app;