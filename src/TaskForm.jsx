import { useState } from 'react';

function TaskForm({ createTask }) {
	const [title, setTitle] = useState('');
	const [descripcion, setDescripcion] = useState('');

	const handlesubmit = (e) => {
		e.preventDefault();
		createTask(title, descripcion);
	};

	return (
		<form onSubmit={handlesubmit}>
			<input
				placeholder="Escribe la tarea"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<input
				placeholder="Escribe la descripción"
				onChange={(e) => {
					setDescripcion(e.target.value);
				}}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
