import express from "express";
import cors from "cors";

import { conn } from "./config/sequelize.js";

const app = express()

// TABELAS

import chefModel from "./models/chefModel.js";

// ROTAS

import chefRoute from "./routes/chefRoute.js"


app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

app.use(express.json())

conn.sync()

app.use("/api/chefs", chefRoute )


export default app;