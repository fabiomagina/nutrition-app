import { useState, useEffect } from 'react';

interface ProgressBarProps {
    label: string;
    max?: number;
    value?: number;
    color: string;
    size?: string;
}

function BarraProgresso({ label, max = 100, value = 0, size, color }:
    ProgressBarProps) {
    const [progress, setProgress] = useState((value / max) * 100);

    useEffect(() => {
        const percentage = (value / max) * 100
        if (percentage > 100) setProgress(100)
        else setProgress((value / max) * 100);
    }, [value, max]);

    const fontStyleBig =
        size === 'big'
            ? 'font-light text-xs'
            : 'text-sm ';

    const unidade = size === 'big' ? 'kcal' : 'g';

    const valor = value.toFixed(0);

    return (
        <div className='flex flex-col w-full'>
            <p className={`mb-0 text-sm text-${color}-700 text-center `}>
                {label}
            </p>
            <div className={`w-full h-2 bg-${color}-100 rounded-full`}>
                <div className={`bg-${color}-500 h-2 rounded `}
                    style={{ width: `${progress}%` }}>
                </div>
                <p className={
                    `text-${color}-700 w-full text-center
                        ${fontStyleBig} tracking-tight`}
                >
                    {`${valor} ${unidade} / ${max} ${unidade}`}
                </p>
            </div>
        </div>
    );
}

export default BarraProgresso;