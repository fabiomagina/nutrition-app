import Link from "next/link"
import { Button } from "../auth/button"

interface ButtonProps {
    texto: string
    link?: string
    onClick?: () => void
}

const Botao = ({ texto, link, onClick }: ButtonProps) => {
    const botaoPadrao =
        <Button onClick={onClick}>
            {texto}
        </Button>
    
    if (link)
        return <Link href={link}>
            {botaoPadrao}
        </Link>
    return botaoPadrao

}

export default Botao