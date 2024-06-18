"use client"

import { useContext, useEffect, useState } from "react";
import RefeicaoItem from "./RefeicaoItem";
import SelecionaData from "./SelecionaData";
import TabelaNutricionalDia from "./TabelaNutricionalDia";
import AdicionarRefeicao from "./AdicionarRefeicao";
import { getRefeicoesByUser } from "@/data/refeicao";
import { AlimentoContext } from "@/contextApi";

export default function RefeicoesDoDia() {
    const [refeicoes, setRefeicoes] = useState<any>([]);
    const { totalDay, setTotalDay } = useContext(AlimentoContext)
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        getRefeicoesByUser().then(refeicoes_ => {
            setLoading(false)
            setRefeicoes(refeicoes_ || [])
        })
    }, [])
    const renderizaRefeicoes = () => {
        if (!refeicoes || refeicoes.length === 0) return <><span className="w-full bg-gray-500/15 h-11 rounded-md text-l text-gray-500/20 "></span>
            <p className="h-[360px] flex pt-[100px] justify-center text-2xl mx-2 text-black drop-shadow-md rounded-md bg-gray-500/5">
            </p>
        </>
        return (
            refeicoes.map((refeicao: IRefeicao) => {
                return <RefeicaoItem {...refeicao} key={refeicao.id} />
            })
        )
    }
    return (
        <div className="w-full h-full ">
            <SelecionaData />
            <div className="">
                <TabelaNutricionalDia />
            </div>
            <div className="    
            flex flex-col 
            gap-1 py-2 px-2 mt-2">
                {renderizaRefeicoes()}
                {!loading && <AdicionarRefeicao />}
            </div>

        </div>

    )
}