import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { BsFillSaveFill } from 'react-icons/bs';

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
				<h1 className="text-2xl font-bold text-white mb-5">
					Crea una nueva tarea
				</h1>
				<label
					htmlFor="message"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Nombre de la tarea
				</label>
				<input
					placeholder="Escribe la tarea"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					value={title}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					autoFocus
				/>
				<label
					htmlFor="message"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
				>
					Descripción de la tarea
				</label>
				<textarea
					placeholder="Escribe la descripción"
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					value={description}
					id="message"
					rows="4"
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
				<button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Guardar <BsFillSaveFill className="inline-flex mb-1" />
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
