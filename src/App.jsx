import Form from './components/Form'
import useTaskColection from './hooks/useTaskColection'
import Container from './components/Container'
import './style/app.css'

export default function App() {
  const { tasksContainer, addTask, removeTask } = useTaskColection()

  return (
    <div className="app">
      
      <Form addTask = {addTask}/>

      <section>
        {tasksContainer.length > 0 
        ?
          <div>{tasksContainer.map((task) => (
            <Container
              key={task.id}
              id={task.id} 
              taskName={task.taskName}
              taskTime={task.taskTime}
              taskDescription={task.taskDescription}
              onRemove={() => removeTask(task.id)}
            />
          ))}
          </div>
        :
          <div className='container'>
            <p>Não há tarefas pendentes.</p>
          </div>}
      </section>
    </div>
  )
}