"use server"

import { db } from "@/lib/db"

export const createRefeicao = async (userId: string, descricao: string, nome: string, disponivel = true, data: Date) => {
    try {
        const refeicaoInserida = await db.refeicao.create({
            data: {
                descricao: descricao,
                userId: userId,
                nome: nome,
                disponivel: disponivel,
                data: data,
            }
        })
        return refeicaoInserida;
    }
    catch {
        return null;
    }
}