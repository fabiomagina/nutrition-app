"use server"

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { URL_BASE } from "@/lib/url_base";
import axios from 'axios';

export const getRefeicoesByUser = async () => {
    const session = await auth();
    if (!session || !session.user) {
        return null;
    }
    const userId = session.user.id;

    try {
        const response = await axios.post(`${URL_BASE}/api/busca-refeicoes`, {
            userId
        })

        return response.data;

    } catch (error) {
        console.error('Erro ao criar refeição:', error);
        return null;
    }
}

export const getRefeicaoById = async (id: string) => {
    try {
        const refeicao = await db.refeicao.findUnique({ where: { id } })
        return refeicao;
    } catch {
        return null;
    }
}

interface CreateRefeicaoProps {
    descricao?: string,
    nome: string,
    disponivel?: boolean
}

export const createRefeicao = async ({ descricao = "", nome, disponivel = true }: CreateRefeicaoProps) => {
    const session = await auth();
    if (!session || !session.user) {
        return null;
    }
    const userId = session.user.id;

    try {
        axios.post(`${URL_BASE}/api/cria-refeicao`, {
            nome,
            descricao,
            disponivel,
            userId
        })
            .then(() => console.log('Refeição criada com sucesso!'))


    } catch (error) {
        console.error('Erro ao criar refeição:', error);
        return null;
    }
}

interface InsereAlimentoProps {
    refeicaoId: string,
    userId: string,
    alimentos: {id: number, qtde: number}[]
}

export const insereAlimento = async ({ refeicaoId, userId, alimentos }: InsereAlimentoProps) => {
    const session = await auth();

    if (!session || !session.user) return null;
    if (session.user.id !== userId) return null

    const sessionUserId = session.user.id;

    try {
        axios.post(`${URL_BASE}/api/insere-alimento`, {
            refeicaoId,
            alimentos,
            userId: sessionUserId
        }).then(() => console.log('Alimento inserido com sucesso!'))

            
    } catch (error) {
        console.error('Erro ao criar refeição:', error);
        return null;
    }
}
