import style from './style.module.css'

export default function Input({ label, inputType, inputId, value, setValue }) {
    return (
        <div className={style.inputTask}>
            <label htmlFor={inputId}>{label}</label>
            <input 
                type={inputType}
                id={inputId}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}