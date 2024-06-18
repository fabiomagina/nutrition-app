import { useEffect } from "react"

interface ITabelaRefeicaoProps {
    carboidratos?: number,
    proteinas?: number,
    gorduras?: number,
    calorias?: number
}

export default function TabelaNutricionalRefeicao(
    { carboidratos = 0, proteinas = 0, gorduras = 0, calorias = 0 }: ITabelaRefeicaoProps) {


    const nutritionItem =
        (nome: string, cor: string, valor: number) => {
            return (
                <div className=
                    {`flex flex-col items-center justify-center w-full
                 gap-0  text-${cor}-500 w-18 rounded-sm`}>
                    <p className="h-5 ">{valor}</p>
                    <p className="text-sm font-light">{nome} </p>
                </div>
            )
        }
    return (
        <div className="
                flex items-center justify-center mx-2
                 gap-2 bg-gray-100 rounded-md">
            {nutritionItem('Carboidratos', 'red', +carboidratos.toFixed(1))}
            {nutritionItem('Proteína', 'blue', +proteinas.toFixed(1))}
            {nutritionItem('Gordura', 'yellow', +gorduras.toFixed(1))}
            {nutritionItem('Calorias', 'blue', +calorias.toFixed(1))}
        </div >

    )
}