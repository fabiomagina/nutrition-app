import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
    link?: string;
    children: any;
}

export default function MenuItem({ link = '', children }: MenuItemProps) {
    return (
        <Link href={link}>
            <button className="bg-mc-secondary-2 text-white 
        px-4 h-12 flex justify-end items-center text-2xl
        rounded-md cursor-pointer hover:bg-mc-secondary
        border-l-4 border-l-mc-secondary-3 w-fit
        ">
                {children}
                <Image
                    className="inline-block ml-4"
                    src="/icons/arrow_forward.png"
                    alt="icone de seta para direita"
                    width={24}
                    height={24}
                />
            </button>
        </Link>
    )
}