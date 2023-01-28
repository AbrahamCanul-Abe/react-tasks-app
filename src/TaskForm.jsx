import { useState } from 'react';

function TaskForm({ createTask }) {
	const [title, setTitle] = useState('');

	const handlesubmit = (e) => {
		e.preventDefault();

		const newTask = {
			title: title,
		};

		createTask(newTask);
	};

	return (
		<form onSubmit={handlesubmit}>
			<input
				placeholder="Escribe la tarea"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
