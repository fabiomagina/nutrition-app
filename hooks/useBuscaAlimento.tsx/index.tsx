import { AlimentoContext } from "@/contextApi";
import { useContext } from "react";

const useBuscaAlimento = () => {
    const { lista } = useContext(AlimentoContext);

    const buscaAlimento = (id: number) => {
        if (lista)
            return lista.find((alimento) => alimento.id === id)
    }
    return buscaAlimento
}

export default useBuscaAlimento