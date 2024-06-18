import Image from "next/image";

export default function LegendasCalendario() {
    const done = <Image
        src="/icons/done.png"
        width={48}
        height={48}
        alt="Tarefa realizada com sucesso!" />
    const atention = <Image
        src="/icons/atention.png"
        width={48}
        height={48}
        alt="Tarefa realizada em partes!" />
    const error = <Image
        src="/icons/error.png"
        width={48}
        height={48}
        alt="Tarefa não realizada!" />


    return (
        <div className="mt-8 md:mt-16 p-2 rounded-md 
        bg-[#898989a7] flex flex-col gap-1">
            <p className="flex gap-2 items-center text-xl font-semibold">
                {done} 70% ou + com sucesso
            </p>
            <p className="flex gap-2 items-center text-xl font-semibold">
                {atention} 50% - 69% de sucesso
            </p>
            <p className="flex gap-2 items-center text-xl font-semibold">
                {error} 0% - 49% de sucesso
                </p>
        </div>

    )
}