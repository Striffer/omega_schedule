import Input from '../Input'
import style from './style.module.css'
import { useState } from 'react'

export default function Form({ addTask }) {
    const [taskName, setTaskName] = useState("")
    const [taskTime, setTaskTime] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    
        addTask({ taskName, taskTime, taskDescription })
        setTaskName("")
        setTaskTime("")
        setTaskDescription("")
    }

    return (
        <form className={style.taskCreator} onSubmit={handleSubmit}>
            <h2>Cadastro de Tarefas</h2>
            <hr />
            <div className={style.taskInputs}>
                <Input 
                    label="Tarefa"
                    inputType="text"
                    inputId="task"
                    value={taskName}
                    setValue={setTaskName}
                />            

                <Input 
                    label="Prazo"
                    inputType="date"
                    inputId="time"
                    value={taskTime}
                    setValue={setTaskTime}
                />
            </div>

            <div className={style.inputTaskDescription}>
                <label htmlFor="taskDescription">Descrição</label>
                <textarea 
                    id="taskDescription" 
                    cols="100" 
                    rows="10"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
            </div>

            <button type='submit' onClick={handleSubmit}>Adicionar</button>
        </form>
    )
}