"use client"

import { useContext, useEffect, useState } from "react";
import BarraProgresso from "./BarraProgresso";
import { AlimentoContext } from "@/contextApi";
import { getRefeicoesByUser } from "@/data/refeicao";
import useBuscaAlimento from "@/hooks/useBuscaAlimento.tsx";

export default function TabelaNutricionalDia() {
    const [totalDay, setTotalDay] = useState<any>({})
    const buscaAlimento = useBuscaAlimento()

    useEffect(() => {
        getRefeicoesByUser().then(refeicoes_ => {
            let totalAcumulado = { calorias: 0, carboidratos: 0, proteinas: 0, gorduras: 0 };
            refeicoes_.forEach((refeicao: any) => {
                const totalRefeicao = getTotalDay(refeicao.alimentos);
                totalAcumulado.calorias += totalRefeicao.calorias;
                totalAcumulado.carboidratos += totalRefeicao.carboidratos;
                totalAcumulado.proteinas += totalRefeicao.proteinas;
                totalAcumulado.gorduras += totalRefeicao.gorduras;
            });
            setTotalDay(totalAcumulado);
        });
    }, []);

    function getTotalDay(alimentoArray: IItemRefeicao[]) {
        const total = alimentoArray.reduce((acc, alimento) => {
            const alimentoCompleto = buscaAlimento(alimento.id)
            if (alimentoCompleto === undefined) return acc;
            acc.calorias += alimentoCompleto["Energia (kcal)"] * alimento.qtde / 100;
            acc.carboidratos += alimentoCompleto["Carboidrato (g)"] * alimento.qtde / 100;
            acc.proteinas += alimentoCompleto["Proteína (g)"] * alimento.qtde / 100;
            acc.gorduras += alimentoCompleto["Lipídeos (g)"] * alimento.qtde / 100;
            return acc;
        }, {
            calorias: 0,
            carboidratos: 0,
            proteinas: 0,
            gorduras: 0
        });
        return total;
    }

    if (totalDay && totalDay.calorias > 0)
        return (
            <div className="flex flex-col items-center justify-center 
        mx-4 px-4 py-6 pb-8 bg-green-50 text-gray-700
         text-2xl gap-7 rounded-md">
                <div className="flex items-center w-full gap-3">
                    <BarraProgresso
                        key={'carboidratosDay'}
                        label={'Carboidratos'}
                        max={292}
                        value={totalDay?.carboidratos || 0}
                        color='red' />
                    <BarraProgresso
                        key={'proteinDay'}
                        label={'Proteínas'}
                        max={292}
                        value={totalDay?.proteinas || 0}
                        color='blue' />
                    <BarraProgresso
                        key={'gorduraDay'}
                        label={'Gordura'}
                        max={292}
                        value={totalDay?.gorduras || 0}
                        color='yellow' />

                </div>
                <BarraProgresso
                    key={'calDay'}
                    label={''}
                    max={292}
                    value={totalDay?.calorias || 0}
                    color='gray'
                    size='big'
                />
            </div>

        )
    else return <></>
}