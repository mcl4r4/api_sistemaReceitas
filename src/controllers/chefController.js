import { response } from "express";
import chefModel from "../models/chefModel.js";

export const cadastrarChef = async (req, res) => {
    const { nome, biografia, especialidade, experiencia, nacionalidade } = req.body;

    if (!nome) {
        res.status(400).json({ messagem: "Campo nome obrigátorio" })
    }
    if (!biografia) {
        res.status(400).json({ messagem: "Campo biografia obrigátorio" })
    }
    if (!especialidade) {
        res.status(400).json({ messagem: "Campo especialidade obrigátorio" })
    }
    if (!experiencia) {
        res.status(400).json({ messagem: "Campo experiencia obrigátorio" })
    }
    if (!nacionalidade) {
        res.status(400).json({ messagem: "Campo nacionalidade obrigátorio" })
    }

    const chef = {
        nome,
        biografia,
        especialidade,
        experiencia,
        nacionalidade
    }
    try {

        const cadastrarChef = await chefModel.create(chef)

        res.status(201).json({
            messagem: "Chef cadastrado com sucesso!",
            cadastrarChef
        })

    } catch (error) {
        res.status(500).json({ messagem: "Erro interno do servidor 😯" })
        console.log(error)
    }
}

export const listarChefs = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit

    try {

        const chefs = await chefModel.findAndCountAll({
            offset,
            limit
        })

        const totalPaginas = Math.ceil(chefs.count / limit)

        res.status(200).json({
            totalPaginas,
            paginaAtual: page,
            Chefs: chefs.rows
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({ messagem: "Erro interno do servidor 😯" })
    }
}

export const buscarChef = async (req, res) => {
    const { id } = req.params;

    try {

        const encontrarChef = await chefModel.findByPk(id)

        res.status(200).json({
            messagem: "Chef encontrado",
            encontrarChef
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ messagem: 'Erro interno do servidor 😯' })
    }
}

export const atualizarChef = async (req, res) => {
    const { id } = req.params;
    const { nome, biografia, especialidade, experiencia, nacionalidade } = req.body;

    if (!id) {
        res.status(400).json({ messagem: "ID inválido" })
    }

    if (!nome) {
        res.status(400).json({ messagem: "Campo nome obrigátorio" })
    }
    if (!biografia) {
        res.status(400).json({ messagem: "Campo biografia obrigátorio" })
    }
    if (!especialidade) {
        res.status(400).json({ messagem: "Campo especialidade obrigátorio" })
    }
    if (!experiencia) {
        res.status(400).json({ messagem: "Campo experiencia obrigátorio" })
    }
    if (!nacionalidade) {
        res.status(400).json({ messagem: "Campo nacionalidade obrigátorio" })
    }
    try {

        const encontrarChef = await chefModel.findByPk(id)

        if (!encontrarChef) {
            res.status(404).json({
                messagem: "Chef não encontrado!"
            })
        }

        if (!nome !== undefined) {
            encontrarChef.nome = nome
        }
        if (!biografia !== undefined) {
            encontrarChef.biografia = biografia
        }
        if (!especialidade !== undefined) {
            encontrarChef.especialidade = especialidade
        }
        if (!experiencia !== undefined) {
            encontrarChef.experiencia = experiencia
        }
        if (!nacionalidade !== undefined) {
            encontrarChef.nacionalidade = nacionalidade
        }


        await encontrarChef.save()

        res.status(200).json({
            messagem: "Chef atualizado",
            Chef: encontrarChef
        })


    } catch (error) {
        console.log(error)
        response.status(500).json({ messagem: "Erro interno do servidor 😯" })
    }
}

export const deletarChef = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(400).json({ messagem: "ID inválido" })
    }

    try {

        const encontrarChef = await chefModel.findByPk(id)

        if (!encontrarChef) {
            res.status(404).json({
                messagem: "Chef não encontrado!"
            })
        }

        const deletarChef = await chefModel.destroy({ where: { id } })
        res.status(204).send()

    } catch (error) {
        res.status(500).json("Erro interno do servidor")
        console.log(error)
    }
}

