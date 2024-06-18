

import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function criaRefeicao(req: NextApiRequest, res: NextApiResponse) {
    const { nome, userId, descricao, disponivel } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User not found." });
    }
    try {
        const refeicaoInserida = await db.refeicao.create({
            data: {
                userId,
                nome,
                descricao,
                disponivel,
                alimentos: [],
                data: new Date()
            }
        })
        res.json(refeicaoInserida);
    }
    catch (error) {
        res.status(500).json({ error: error});
    }
}
