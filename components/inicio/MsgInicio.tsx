export default function MsgInicio() {
    const numDestaque = (tamanho: string, valor: number) => {
        return (
            <div className={`bg-gray-700 text-white 
            p-4 rounded-full`}>
                <p className={`text-${tamanho}`}>{valor}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center 
        my-4 mx-4 px-4 py-6 bg-white rounded-md text-gray-700 text-2xl gap-4">
            <div className="flex items-center gap-3 text-2xl">
                Você fez: {numDestaque('5xl', 94)}
                refeições
            </div>
            <div className="text-center">que o nutri passou, no
                período de <span className={`bg-gray-700 text-white 
            px-2 mx-1 rounded-md`}>30</span> dias!</div>
        </div>
    )
}