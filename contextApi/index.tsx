"use client"

import { getRefeicoesByUser } from "@/data/refeicao";
import useBuscaAlimento from "@/hooks/useBuscaAlimento.tsx";
import { createContext, ReactElement, useEffect, useState } from "react";

interface IAlimentoContext {
    alimentoAtual: IItemRefeicao | null;
    lista: IAlimento[];
    setAlimentoAtual: (alimento: any) => void;
    setLista: (lista: any) => void;
    totalDay: {
        calorias: number;
        carboidratos: number;
        proteinas: number;
        gorduras: number;
    } | undefined;
    setTotalDay: (total: any) => void;
}

export const AlimentoContext = createContext<IAlimentoContext>({} as IAlimentoContext);

interface AlimentoProviderProps {
    children: ReactElement;
}

const AlimentoProvider = ({ children }: AlimentoProviderProps) => {
    const [alimentoAtual, setAlimentoAtual] = useState<IItemRefeicao>({ id: 1, qtde: 100 });
    const [lista, setLista] = useState([]);
    const [totalDay, setTotalDay] = useState<{
        calorias: number;
        carboidratos: number;
        proteinas: number;
        gorduras: number;
    } | undefined>();

    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((data) => setLista(data));
    }, []);

  

    return (
        <AlimentoContext.Provider
            value={{
                alimentoAtual,
                lista,
                setAlimentoAtual,
                setLista,
                totalDay,
                setTotalDay
            }}
        >
            {children}
        </AlimentoContext.Provider>
    )
}
export default AlimentoProvider;