import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export const createkeyadmin = async(req, res) => {
    const { name, description, address, type, rating, } = req.body

    try {
        const newplaces = await prisma.place.create({
        data: {name, description, address, type, rating}
    })
    res.status(201).json(newplaces)
    } catch (error) {
        res.status(400).json({
            erro: "erro ao criar places",
            detalhes: error.message
        })
    }

}

export const placesall = async (req, res) => {
    try {
        const all = await prisma.place.findMany()
    res.status(200).json(all)
    } catch (error) {
        res.status(500).json({
            erro: "erro ao encotrar locais",
            detalhes: error.message
        })
    }
}

// get por filtro
export const filtreget = async (req, res) => {
    const { type } = req.query
    try {
        const filtre = await prisma.place.findMany({
        where: { type }
    })
    res.status(200).json(filtre)
    } catch (error) {
        res.status(500).json({
            rerro: "erro ao encotrar local especifico",
            detalhes: error.message
        })
    }
}

export const upadatekeyadmin = async (req, res) => {
    const id = req.params.id
    try {
        const { name, description, address, type, rating } = req.body

    const updateplaces = await prisma.place.update({
        where: {id: parseInt(id)},
        data: { name, description, address, type, rating }
    })

    res.status(200).json(updateplaces)
    } catch (error) {
        res.status(400).json({
            rerro: "erro ao atualizar places",
            detalhes: error.message
        })
    }
}


export const deletekeyadmin = async (req, res) => {
    const id = req.params.id

    try {
        const deleted = await prisma.place.delete({
        where: { id: parseInt(id) }
    })

    res.status(200).json(deleted)
    } catch (error) {
        res.status(400).json({
            rerro: "erro ao deletar usuario",
            detalhes: error.message
        })
    }
}