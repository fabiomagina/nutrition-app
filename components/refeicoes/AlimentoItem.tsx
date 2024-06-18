import { AlimentoContext } from "@/contextApi";
import { useContext, useEffect } from "react";

interface AlimentoProps {
    nome?: string;
    quantidade: number;
    id?: number;
    hidden?: boolean;
}

export default function AlimentoItem({ nome, quantidade, id, hidden = false }: AlimentoProps) {
    const { lista } = useContext(AlimentoContext);

    const alimentoItem = lista.find(item => item.id === id);

    const retornaPropriedade = (propriedade?: number) => {
        if (propriedade) return (propriedade * quantidade / 100).toFixed(0)
        else return 0
    }

    return (
        <div className={`${hidden && 'hidden'}
        flex  bg-white mx-2 justify-between 
        px-3 py-1 rounded-md`} >
            <div className="w-2/3">
                <p>
                    {alimentoItem?.Nome}
                </p>
                <p className="w-full text-xs text-gray-700">
                    {quantidade}g
                </p>
            </div>
            <div className="flex flex-col justify-center 
            text-sm items-end text-gray-700">
                <div className=" text-center">
                    <p className="text-gray-700 ">
                        {retornaPropriedade(alimentoItem?.["Energia (kcal)"])}
                        <span className="text-gray-700 pl-1">kcal</span>
                    </p>
                </div>
                <div className="flex gap-1">
                    <p>C:
                        <span className={'text-red-500 ml-1'}>
                            {retornaPropriedade(alimentoItem?.["Carboidrato (g)"])}g
                        </span>
                    </p>
                    <p>P:
                        <span className={'text-blue-500 ml-1'}>
                            {retornaPropriedade(alimentoItem?.["Proteína (g)"])}g
                        </span>
                    </p>
                    <p>G:
                        <span className={'text-yellow-500 ml-1'}>
                            {retornaPropriedade(alimentoItem?.["Lipídeos (g)"])}g
                        </span>
                    </p>
                </div>

            </div>

        </div>
    )
}