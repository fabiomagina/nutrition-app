import AlimentoItem from "./AlimentoItem"
import useBuscaAlimento from "@/hooks/useBuscaAlimento.tsx"
import TabelaNutricionalRefeicao from "./TabelaNutricionalRefeicao"
import AdicionarAlimento from "./AdicionarAlimento"
import { useState } from "react"

export default function RefeicaoItem(
    { id, nome, alimentos = [] }: IRefeicao) {
    const buscaAlimento = useBuscaAlimento()
    const [showAlimentos, setShowAlimentos] = useState(true)

    const renderAlimentos = () => {
        if (alimentos && alimentos.length > 0)
            return alimentos.map((alimento, index) => {
                return <AlimentoItem id={alimento.id} hidden={!showAlimentos}
                    quantidade={alimento.qtde}
                    key={alimento.id + index} />
            })
    }
    const getTbNutriValues = () => {
        const valoresIniciais = {
            calorias: 0,
            carboidratos: 0,
            proteinas: 0,
            gorduras: 0
        };
        if (alimentos && alimentos.length > 0) {
            const tbNutriValues = alimentos.reduce((acc, alimento) => {
                const alimentoCompleto = buscaAlimento(alimento.id)
                if (alimentoCompleto) {
                    acc.calorias += alimentoCompleto?.["Energia (kcal)"]! * alimento.qtde / 100
                    acc.carboidratos += alimentoCompleto?.["Carboidrato (g)"]! * alimento.qtde / 100
                    acc.proteinas += alimentoCompleto?.["Proteína (g)"]! * alimento.qtde / 100
                    acc.gorduras += alimentoCompleto?.["Lipídeos (g)"]! * alimento.qtde / 100
                }
                else { console.log("Alimento não encontrado" + JSON.stringify(alimento)) }
                return acc
            }, valoresIniciais)
            return tbNutriValues
        }
    }
    return (
        <>
            <div className="bg-mc-secondary-2 text-white 
                            px-4 h-11 flex justify-stretch items-center
                            rounded-md cursor-pointer hover:bg-mc-secondary
                            border-l-4 border-l-mc-secondary-3 w-full"
                onClick={() => setShowAlimentos(!showAlimentos)}>
                {nome}
            </div >
            <div className="lg:flex w-full items-start">
                <div className="flex flex-col gap-1 flex-1 text-gray-700 
                                    box-border mb-2">
                    {alimentos && <>
                        {renderAlimentos()}

                        <TabelaNutricionalRefeicao {...getTbNutriValues()} /></>}

                    <div className={`${!showAlimentos && 'hidden'} flex w-full justify-end`} >
                        <AdicionarAlimento refeicaoId={id} />
                    </div>

                </div>
            </div >
        </>

    )
}