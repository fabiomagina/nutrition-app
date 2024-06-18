import { useState } from 'react';
import Dia from './Dia';

export default function CalendarioDoMes() {
    const [mes, setMes] = useState(new Date().getMonth());
    const [ano, setAno] = useState(new Date().getFullYear());

    const diasNoMes = new Date(ano, mes + 1, 0).getDate();
    const primeiroDia = new Date(ano, mes, 1).getDay();

    const renderDias = () => {
        const dias = [];
        for (let i = 1; i <= diasNoMes; i++) {
            dias.push(<Dia valor={i} />);
        }

        const diasAnteriores = [];
        for (let i = 0; i < primeiroDia; i++) {
            diasAnteriores.push(<Dia vazio />);
        }

        const diasCompletos = [...diasAnteriores, ...dias];
        const semanas = [];
        for (let i = 0; i < diasCompletos.length; i += 7) {
            semanas.push(diasCompletos.slice(i, i + 7));
        }

        return semanas.map((semana, index) => (
            <tr key={index}>
                {semana.map((dia, index) => (
                    <td key={index}>{dia}</td>
                ))}
            </tr>
        ));
    };

    const diasDaSemana = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

    const avancarMes = () => {
        if (mes === 11) {
            setAno(ano + 1);
            setMes(0);
        } else {
            setMes(mes + 1);
        }
    };

    const retrocederMes = () => {
        if (mes === 0) {
            setAno(ano - 1);
            setMes(11);
        } else {
            setMes(mes - 1);
        }
    };

    return (
        <div>
            <div className='flex justify-end'>
                <div className='
                flex gap-2 px-2 rounded-md w-fit bg-[#0303034d]'>
                    <button onClick={retrocederMes}>
                        Anterior
                    </button>
                    <p className='text-2xl'>
                        {`${mes + 1}/${ano}`}
                    </p>
                    <button onClick={avancarMes}>
                        Próximo
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {diasDaSemana.map((dia, index) => (
                            <th key={index}>
                                <div className='flex justify-center items-end mt-4 md:mt-12'>
                                    <p className=
                                        'bg-mc-secondary rounded-full text-zinc-200 w-6 '>
                                        {dia}
                                    </p>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderDias()}
                </tbody>
            </table>
        </div>
    );
}