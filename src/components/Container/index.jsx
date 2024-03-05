import style from './style.module.css'

export default function Container({ taskName, taskTime, taskDescription, onRemove }) {
    return (
        <div 
            className= {style.container}
        >
            <div className={style.containerHeader}>
                <h3>{taskName}</h3>
                <span>Prazo: {taskTime}</span>
            </div>
            <p>{taskDescription}</p>
            <button onClick={onRemove}>Concluir</button>
        </div>
    )
}