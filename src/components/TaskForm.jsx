import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } =
		useContext(
			TaskContext
		); /* este value se refiere al objeto que se envia desde app.jsx que contiene entre otros el createtask*/

	const handlesubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<div className="max-w-md mx-auto rounded-md">
			<form
				onSubmit={handlesubmit}
				className="bg-slate-800 p-10 mb-4 rounded-md"
			>
				<h1 className="text-2xl font-bold text-white mb-5">Crea tu tarea</h1>
				<input
					placeholder="Escribe la tarea"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					className="bg-slate-300 p-3 w-full mb-3"
					autoFocus
				/>
				<textarea
					placeholder="Escribe la descripción"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
					className="bg-slate-300 p-3 w-full mb-3"
				/>
				<button className="bg-indigo-500 px-4 py-1 rounded-md mt-4 hover:bg-indigo-400 text-white">
					Guardar
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
