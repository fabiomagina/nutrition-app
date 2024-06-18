import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex flex-1 pb-4 flex-col 
        items-center justify-center ">
            <div className="w-fit rounded-md bg-[#ffffffef]">
                <Image src={'/marcelo_logo-2.png'}
                    width={210}
                    height={210}
                    alt="marcelo cari logo" />
            </div>
        </div>
    )
}