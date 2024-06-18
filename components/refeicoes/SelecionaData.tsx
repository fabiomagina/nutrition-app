import { useState } from "react"

export default function SelecionaData() {

    const [dia, setDia] = useState(new Date().getDate())
    const [mes, setMes] = useState(new Date().getMonth() + 1)
    const [ano, setAno] = useState(new Date().getFullYear())

    const retrocederDia = () => {
        setDia(dia-1)
    }

    const avancarDia = () => {
        setDia(dia+1)
        
    }

    return (
        <div className='flex justify-end pb-2 mr-4'>
            <div className='
                flex gap-2 px-2 rounded-md w-fit bg-[#0303034d]'>
                <button onClick={retrocederDia}>
                    Anterior
                </button>
                <p className='text-2xl'>
                    {`${dia + 1}/${mes}/${ano}`}
                </p>
                <button onClick={avancarDia}>
                    Próximo
                </button>
            </div>
        </div>
    )
}