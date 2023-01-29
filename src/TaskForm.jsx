import { useState } from 'react';

function TaskForm({ createTask }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handlesubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
	};

	return (
		<form onSubmit={handlesubmit}>
			<input
				placeholder="Escribe la tarea"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<textarea
				placeholder="Escribe la descripción"
				onChange={(e) => {
					setDescription(e.target.value);
				}}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
