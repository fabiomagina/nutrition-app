import CalendarioDoMes from './CalendarioDoMes';
import LegendaCalendario from './LegendaCalendario';

export default function HistoricoDoMes() {
    return (
        <div className="flex flex-col md:flex-row-reverse md:gap-8 justify-center items-center ">
            <CalendarioDoMes />
            <LegendaCalendario />
        </div>
    );
}