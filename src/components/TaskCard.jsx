import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { IoMdTrash } from 'react-icons/io';

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-gray-800 text-white p-5 rounded-md">
			<h1 className="text-xl font-bold capitalize">{task.title}</h1>
			<p className="text-gray-400 text-sm">{task.description}</p>
			<button
				className="mt-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				onClick={() => deleteTask(task.id)}
			>
				Eliminar tarea <IoMdTrash className="inline-flex mb-1" />
			</button>
		</div>
	);
}

export default TaskCard;
