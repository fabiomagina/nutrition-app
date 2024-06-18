"use client"

import { useContext, useEffect, useState } from 'react';
import TabelaNutricionalAlimento from '../TabelaNutricionalAlimento';
import { AlimentoContext } from '@/contextApi';
import BuscaAlimento from '../BuscaAlimento';
import useSalvaAlimento from '@/hooks/useSalvaAlimento.tsx';
import Input from '@/components/ui/Input';
import Botao from '@/components/ui/Botao';

export default function AdicionarAlimento({ refeicaoId }: { refeicaoId: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const { alimentoAtual, setAlimentoAtual } = useContext(AlimentoContext);
    const salvaAlimento = useSalvaAlimento()

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
                <BuscaAlimento />
                <Input label="Quantidade (g)"
                    type="number"
                    value={alimentoAtual?.qtde || 0}
                    setValue={value => setAlimentoAtual
                        ({ ...alimentoAtual, qtde: parseInt(value) })
                    }
                    className="max-w-[100px]"
                />
                <div className="flex flex-col items-center 
                justify-center mb-4">
                    <TabelaNutricionalAlimento />
                </div>
                <div className='flex justify-end mr-4'>
                    <Botao onClick={() => {
                        salvaAlimento(refeicaoId)
                        toggleModal()
                    }} texto='Salvar' />
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
                                Adicionar Alimento
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
                <p >Adicionar Alimento</p>
            </button>
            {/* Modal */}
        </div>


        {isOpen && modal()}

    </>
    )
}