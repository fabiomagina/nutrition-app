
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Botao from '@/components/ui/Botao';
import { auth } from '@/auth';
import { createRefeicao } from '@/data/refeicao';

export default function AdicionarRefeicao() {
    const [isOpen, setIsOpen] = useState(false);
    const [nomeRefeicao, setNomeRefeicao] = useState('')

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
                <Input label="Nome da refeição"
                    type="string"
                    value={nomeRefeicao}
                    setValue={setNomeRefeicao}
                />

                <div className='flex justify-end mr-4'>
                    <Botao onClick={() => {
                        createRefeicao({ nome: nomeRefeicao })
                            .then(() => {
                                setNomeRefeicao('')
                                toggleModal()
                            })
                        toggleModal()
                    }} texto='Criar refeição' />
                </div>
            </div>
        )
    }

    const modal = () => {
        return <div className="fixed inset-0 z-10 overflow-y-auto">

            <div className="flex h-full items-center justify-center min-h-screen px-4 pt-6 
            pb-20 text-center sm:block sm:p-0">
                {/* Fundo do modal */}
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

                {/* Conteúdo do modal */}
                <div className='h-full flex justify-center items-center'>
                    <div className="
inline-block w-full 
max-w-md items-center overflow-hidden 
text-left align-middle transition-all mb-16
transform bg-gray-200 shadow-xl rounded-lg ">
                        {/* Botão de fechar */}

                        {botaoFechar()}
                        {/* Conteúdo do modal */}
                        <div>
                            <h3 className="text-lg font-medium leading-6 p-4
     bg-mc-secondary
     text-gray-100">
                                Nova refeição
                            </h3>
                            <div className="mt-2 mx-2">
                                {conteudoModal()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
    return (<>
        <div className="flex mx-1 justify-center">
            <button className=" text-base
             bg-mc-primary hover:bg-mc-primary-2
             active:bg-mc-primary-2
        text-white rounded-full bg-opacity-95 px-2 mr-4 
        gap-1 mt-2 mb-1 flex justify-center items-center"
                onClick={toggleModal}>
                <p className="flex 
            justify-center items-center 
            text-2xl mt-[-4px]">+</p>
                <p >Adicionar Refeição</p>
            </button>
            {/* Modal */}
        </div>


        {isOpen && modal()}

    </>
    )
}