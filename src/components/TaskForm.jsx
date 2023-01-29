import { useState } from 'react';

function TaskForm({ createTask }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handlesubmit = (e) => {
		e.preventDefault();
		createTask({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<form onSubmit={handlesubmit}>
			<input
				placeholder="Escribe la tarea"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				value={title}
				autoFocus
			/>
			<textarea
				placeholder="Escribe la descripción"
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				value={description}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
