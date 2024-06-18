import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function buscaRefeicoes(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User not found." });
    }
    try {
        const userRefeicoes = await db.refeicao.findMany({ where: { userId } })
        return res.json(userRefeicoes);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
