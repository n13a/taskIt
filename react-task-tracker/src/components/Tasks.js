import Task from './task'

const Tasks = ({ tasks}) => {

  return (
    <>
        {tasks.map((task)=> (<Task key={task.id} tasks={task} /> ))}        
    </>
  )
}

export default Tasks



















