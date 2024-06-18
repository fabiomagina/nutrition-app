import { AlimentoContext } from "@/contextApi";
import useBuscaAlimento from "@/hooks/useBuscaAlimento.tsx";
import { useContext, useEffect, useState } from "react"


export default function BuscaAlimento() {
    const [searchString, setSearchString] = useState<string>("");
    const { alimentoAtual,
        lista,
        setAlimentoAtual
    } = useContext(AlimentoContext);
    // const buscaAlimento = useBuscaAlimento();
    // const alimentoSelecionado = buscaAlimento(alimentoAtual?.id || 0);
    const [results, setResults] = useState<IAlimento[] | undefined | void>([]);

    useEffect(() => {
            setResults(search(lista, searchString))
    }, [searchString, alimentoAtual?.id])

    useEffect(() => {
            setResults([])
    }, [alimentoAtual?.id])

    function search(lista: any, searchString: string): IAlimento[] | void {
        const newList = lista.filter((item: any) =>
            item.Nome?.toLowerCase().includes(searchString.toLowerCase())
        )
        if (newList.length > 0 && alimentoAtual !== newList[0]) {
            setAlimentoAtual(newList[0]);
            return
        }
        return newList;
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };


    const renderListaDeAlimentos = () => {
        if (searchString.length >= 3 && results)
            return results.map((item) => (
                <div
                    key={item.id}
                    className="hover:bg-gray-500 hover:text-gray-100
                    cursor-pointer p-1 px-2 rounded-sm
                    "
                    onClick={() => setSearchString(item.Nome)}>
                    {item.Nome}
                </div>
            ))
    }

    return (
        <div className="flex items-center gap-2 p-2 rounded-md bg-white justify-center
                         text-gray-700 w-full flex-wrap text-lg">

            <label className="text-center w-fit" htmlFor="nome">
                Alimento:
            </label>

            <div className="relative">
                <input className={` text-gray-900 rounded-md p-1 px-2 lg:px-4 
                                    bg-gray-200 flex-1 focus:outline-none focus:bg-gray-300 `}
                    placeholder={`ex.: Arroz integral`}
                    type="text" value={searchString}
                    onChange={handleSearch} list="options" />
                <div id="options"
                    className="bg-gray-50  text-gray-900 absolute top-8 max-h-48 overflow-y-auto
            rounded-md">
                    {renderListaDeAlimentos()}
                </div>
            </div>
        </div>
    );
}
