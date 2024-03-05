import { useState } from 'react'

export default function useTaskColection() {
  const [tasksContainer, setTasksContainer] = useState(() => {
    const storedTask = localStorage.getItem("str-task-lib")
    if (!storedTask) return []
    const taskArray = JSON.parse(storedTask)
    return taskArray
  })    
    
  const addTask = ({ taskName, taskTime, taskDescription }) => {
    const id = Math.floor(Math.random() * 1000000)
    const taskContent = { id, taskName, taskTime, taskDescription }
    setTasksContainer(state => {
      const newState = [taskContent, ...state]
    
      localStorage.setItem("str-task-lib", JSON.stringify(newState))
      return newState
    })
  }
    
  const removeTask = (id) => {
    setTasksContainer(state => {
      const newState = state.filter(task => task.id !== id)
    
      localStorage.setItem("str-task-lib", JSON.stringify(newState))
      return newState
    })
  }

  return { tasksContainer, addTask, removeTask }
}