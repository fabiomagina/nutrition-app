export default function Dia({ valor, vazio }:
    { valor?: number, vazio?: boolean }) {
    return (
        <div className={
            `h-12 w-12 bg-gray-200 text-gray-900
        flex justify-center items-center rounded-md 
        cursor-pointer hover:bg-gray-300
        ${vazio ? 'invisible' : ''}`}>
            <p className="text-2xl">{vazio ? '' : valor}</p>
        </div>
    )
}