import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function pegaUsuarioId(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;

    try {
        const user = await db.user.findUnique({ where: { id } })
        res.status(200).json(user);

    } catch {
        res.status(500).json({ message: 'Erro ao buscar o usuário.' });
    }


}