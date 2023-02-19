import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  // Recibimos como parametro la funcion createTask
  const [title, setTitle] = useState(""); // Inicializmaos el useState
  const [description, setDescription] = useState(""); // Inicializmaos el useState
  const { createTask } = useContext(TaskContext); // Obtenemos funcion createTask

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creamos el objeto para una nueva lista y poder visualizar
    createTask({
      title,
      description,
    });
    setTitle(""); // Inicializamo nuestro estado a String vacio
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} // Igualamos el value al useState actual
          className="bg-slate-300 p-1 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description} // Igualamos el value al useState actual
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
