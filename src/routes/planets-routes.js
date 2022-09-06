import express from "express";

import PLANETS from "../data/planets.js";

const router = express.Router();

class PlanetsdRoutes {
    constructor() {
        router.get("/", this.getAll);
        router.get("/:idPlanet", this.getOne);
        router.post("/", this.post);
    }

    getAll(req, res, next) {
        res.status(200);
        res.json(PLANETS);
    }

    getOne(req, res, next) {

    }

    post(req, res, next) {

    }
}

new PlanetsdRoutes();
export default router;