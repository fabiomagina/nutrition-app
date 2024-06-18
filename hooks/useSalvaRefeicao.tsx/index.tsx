"use client"
import { auth } from "@/auth";

const useSalvaRefeicao = () => {

    const salvaRefeicao = async (nome: string) => {
        const session = await auth()

        if (!session) {
            return
        }
        return fetch('http://localhost:3000/api/cria-refeicao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                userId: session.user?.id
            }
            )
        })
    }
    return salvaRefeicao
}

export default useSalvaRefeicao
