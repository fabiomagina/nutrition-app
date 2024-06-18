
interface InputProps {
    label: string;
    value: number | string;
    setValue: (nome: string) => void;
    type?: string;
    className?: string;
}

const Input = ({ label, value, setValue, type = 'string', className }:
    InputProps) => {
    return (
        <div className="
        flex items-center gap-2 p-2 
        rounded-md bg-white justify-center
         text-gray-700 w-full flex-wrap text-lg">
            <label className="
             text-center w-fit" htmlFor="nome">
                {label}:
            </label>
            <input type={type}
                className={`
                text-gray-900 rounded-md p-1 px-2 text-end
                lg:px-4 bg-gray-200 flex-1 w-full focus:outline-none
                 focus:bg-gray-300 ${className}`}
                placeholder={`ex.: Café da manhã`}
                step={10}
                value={type === 'string' ? value : JSON.stringify(value)}
                onChange={e => setValue(e.target.value)} />
        </div>
    )
}

export default Input