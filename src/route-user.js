import { Router } from "express";

const router_cliente = Router();

router_cliente.post("/login", (req, res) => {

    const { user, pass, repeatPass } = req.body

    if (user == "" || pass == "" || repeatPass == "") {
        return res.json({
            Erro: "Preencha todos os campos!"
        })
    }
})

export { router_cliente }

