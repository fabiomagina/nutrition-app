import { useState } from 'react';
import Input from '../Input';
import Botao from '../Botao';
import TabelaNutricionalAlimento from '@/components/refeicoes/TabelaNutricionalAlimento';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState('')
    const [qtAlimentoAtual, setQtAlimentoAtual] = useState('')

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const botaoFechar = () => {
        return (
            <div className="absolute top-0 right-0 pt-4 pr-4 ">
                <button onClick={toggleModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-300 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        )
    }

    const conteudoModal = () => {
        return (
            <div className="w-full flex flex-col gap-2 mb-4">
                <Input
                    label="Alimento"
                    value={nome}
                    setValue={setNome} />
                <Input
                    label="quantidade"
                    type="number"
                    value={qtAlimentoAtual}
                    setValue={setQtAlimentoAtual}
                    className="max-w-[100px]"
                />
                <div className="
flex flex-col items-center justify-center
mb-4">
                    <TabelaNutricionalAlimento />
                </div>
                <div className='flex justify-end mr-4'>
                    <Botao link='/' texto='Salvar' />
                </div>
            </div>
        )
    }

    const modal = () => {
        return <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">

                {/* Fundo do modal */}
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

                {/* Conteúdo do modal */}
                <div className="inline-block w-full max-w-md my-8 overflow-hidden  text-left
                         align-middle transition-all transform bg-gray-200 shadow-xl rounded-lg ">

                    {/* Botão de fechar */}
                    {botaoFechar()}

                    {/* Conteúdo do modal */}
                    <div>

                        <h3 className="text-lg font-medium leading-6 p-4 bg-mc-secondary text-gray-100">
                            Adicionar Alimento
                        </h3>

                        <div className="mt-2 mx-2">
                            {conteudoModal()}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
            {/* Botão para abrir o modal */}
            <button onClick={toggleModal}>Abrir modal</button>

            {/* Modal */}
            {isOpen && modal()}
        </>
    );
}

export default Modal;
