import { AlimentoContext } from "@/contextApi";
import { getRefeicoesByUser, insereAlimento } from "@/data/refeicao";
import { useContext, useEffect, useState } from "react";

const useSalvaAlimento = () => {
    const { alimentoAtual } =
        useContext(AlimentoContext);
    const [refeicoes, setRefeicoes] = useState<IRefeicao[]>([]);

    useEffect(() => {
        getRefeicoesByUser().then(refeicoes_ => {
            setRefeicoes(refeicoes_ || [])
        })
    }, [])

    useEffect(() => {
        console.log(refeicoes)
    }, [refeicoes])

    const salvaAlimento = (idRefeicao: string) => {
        const refeicaoAtual = refeicoes.find(
            (refeicao) => refeicao.id === idRefeicao);

        if (alimentoAtual && refeicaoAtual) {
            const alimentos = [...refeicaoAtual.alimentos,
            { id: alimentoAtual.id, qtde: alimentoAtual.qtde }]
            const refeicaoId = refeicaoAtual.id
            const userId = refeicaoAtual.userId
            const refeicoes = insereAlimento({ refeicaoId, userId, alimentos })

            return refeicoes
        }
        else return null
    }
    return salvaAlimento
}
export default useSalvaAlimento
