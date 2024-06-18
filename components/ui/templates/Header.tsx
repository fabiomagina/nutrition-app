"use client"

import { auth } from "@/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeaderProps {
    children: any;
    type?: 'primary' | 'secondary';
    userImage?: string;
}

export default function Header(
    { children, type = 'primary', userImage }: HeaderProps) {
    //criar funcao que volta uma página
    const router = useRouter();

    const bgColor = type === 'primary'
        ? 'bg-mc-secondary'
        : 'bg-mc-primary-2';

    const renderButtonBack = () => {
        if (type === 'secondary') {
            return (
                <button className="absolute bottom-[-20px] 
                left-2 w-12 h-12 bg-mc-secondary-2
                rounded-full  z-10 text-2xl"
                    onClick={() => router.push('/')}>
                    <Image
                        className="inline-block w-12 h-12"
                        src="/icons/arrow_back.png"
                        alt="icone de seta para direita"
                        width={24}
                        height={24}
                    /> </button>
            )
        }
    }
    const renderAvatar = () => {
        if (type === 'primary') {
            return <img src={userImage} alt="User profile picture"
                className="rounded-full h-[4rem] w-[4rem]" />
        }
    }
    return (
        <header className={`
            ${bgColor}  h-20
            flex items-center ${(type == 'primary')
                ? `justify-between` : `justify-center`} 
            px-8 rounded-sm relative`}>
            <h1 className={`text-white text-3xl `}>
                {children}
            </h1>
            {renderAvatar()}
            {renderButtonBack()}
        </header>
    )
}