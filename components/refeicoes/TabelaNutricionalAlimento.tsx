import { AlimentoContext } from "@/contextApi";
import useBuscaAlimento from "@/hooks/useBuscaAlimento.tsx";
import { useContext, useEffect, useState } from "react";

export default function TabelaNutricionalAlimento() {
    const buscaAlimento = useBuscaAlimento()
    const { alimentoAtual } = useContext(AlimentoContext);
    const [alimentoAtual_, setAlimentoAtual_] = useState<IAlimento | undefined>()
    const qtde = alimentoAtual?.qtde ?? 0

    useEffect(() => {
        if (alimentoAtual && alimentoAtual?.id) {
            const alimento = buscaAlimento(alimentoAtual.id)
            setAlimentoAtual_(alimento!)
        }
    }, [alimentoAtual?.id, alimentoAtual?.qtde])

    const nutritionItem =
        (nome: string, cor: string, valor: number) => {
            return (
                <div className=
                    {`flex flex-col items-center justify-center w-full
                 gap-0  text-${cor}-500 w-18 rounded-sm`}>
                    <p className="h-5 ">{(valor * (+qtde) / 100).toFixed(1)}</p>
                    <p className="text-sm font-light">{nome}</p>
                </div>
            )
        }

    return (
        <div className="flex items-center justify-center gap-2 bg-[#ffffff] mx-4 px-4 lg:px-8 w-full rounded-sm ">
            {nutritionItem('Carboidratos', 'red', (alimentoAtual_?.["Carboidrato (g)"] ?? 0))}
            {nutritionItem('Proteína', 'blue', (alimentoAtual_?.["Proteína (g)"] ?? 0))}
            {nutritionItem('Gordura', 'yellow', (alimentoAtual_?.["Lipídeos (g)"] ?? 0))}
            {nutritionItem('Calorias', 'blue', (alimentoAtual_?.["Energia (kcal)"] ?? 0))}
        </div >

    )
}