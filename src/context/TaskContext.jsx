import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// Permite poner el nombre del componente
export const TaskContext = createContext(); // Nombre del contexto FR

// Este es el componente que englobal a resto de componentes
export function TaskContextProvider(props) {
  // Este es el componente

  const [tasks, setTasks] = useState([]); // Creamos Estado

  // Se asignas los valores ingresados en los inputs
  function createTask(task) {
    //Fold= minimizar
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length, // Colocamos la longuitud del arreglo
        description: task.description,
      },
    ]);
  }

  // Funcion para eliminar un tarea
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // Se ejecuta despues de estado llamando a la funcion que extraer los datos de tasks.js
  useEffect(() => {
    setTasks(data); // La informacion de task.js
  }, []); // Se ejecuta una sola vez.


  return (
    // Aqui creamos el componente
    <TaskContext.Provider
      value={{
        tasks, // Esto es igual tasks: tasks
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
