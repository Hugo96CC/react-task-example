import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'; // Importamos contexto

function TaskList() {
  const {tasks} = useContext(TaskContext) // Usamos contesto recibimos el arreglo de objetos

if(tasks.length === 0){ // Verificamos si existen datos en nuestro tasks
  return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>
}

  return (
   <div className='grid grid-cols-4 gap-2'>
    {tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
      
    ))}
   </div>
  );
}


export default TaskList;