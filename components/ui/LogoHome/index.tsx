import { CardWrapper } from "@/components/auth/card-wrapper";
import Image from "next/image";

export default function LogoHome() {
    return (<div className="flex flex-col items-center">
            <Image src="/marcelo_logo_hd_OG.jpg"
                width={160}
                height={160}
                alt="Picture of the author" />
            <div>
                <h1 className="text-mc-primary text-3xl">
                    Marcelo Cari Nutri
                </h1>

                <h2 className="text-mc-secondary text-xl text-center w-full">
                    Planejamento Alimentar
                </h2>
            </div ></div>
    )
}