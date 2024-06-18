import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function buscaRefeicoes(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: "Refeicao não encontrada." });
    }
    try {
        const userRefeicoes = await db.refeicao.findFirst({ where: { id } })
  
        return res.json(userRefeicoes);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
