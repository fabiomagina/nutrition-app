import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuInicial() {
    return (
        <div className="flex flex-col 
        w-full flex-1 h-full min-h-full justify-center
        md:px-[3%] lg:px-[6%] items-center md: mt-[-3rem]">
            <div className="
            w-full flex justify-center">
                <Logo />
            </div>
            <div className="flex flex-col pl
        gap-1 py-2 px-2 items-end justify-center">
                <MenuItem link="/refeicoes">Refeições de Hoje</MenuItem>
                <MenuItem link="/historico">Meu Histórico</MenuItem>
                <MenuItem link="/contato">Fale com o Nutri</MenuItem>
                <MenuItem link="/perfil">Meu Perfil</MenuItem>
            </div>
        </div>
    )
}