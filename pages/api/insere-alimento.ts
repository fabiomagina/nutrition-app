import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function insereAlimento(req: NextApiRequest, res: NextApiResponse) {
    const { refeicaoId, userId, alimentos } = req.body;
    console.log(refeicaoId, userId, alimentos)

    try {
        const refeicao = await db.refeicao.update({
            where: {
                id: refeicaoId,
                userId
            },
            data: {
                alimentos
            }
        });

        res.status(200).json(refeicao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao inserir o alimento' });
    }
}