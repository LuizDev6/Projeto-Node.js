import express from "express"
import { router_cliente } from "./route-user.js";

const app = express();
app.use(express.json())
app.use(router_cliente)


app.listen(3333, () => console.log("Servidor funcionando..."));

