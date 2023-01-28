import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { tasks as data } from './tasks';
import { useEffect, useState } from 'react';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	function createTask(taskTitle, taskDescription) {
		setTasks([
			...tasks,
			{
				title: taskTitle,
				id: tasks.length,
				description: taskDescription,
			},
		]);
	}

	return (
		<>
			<TaskForm createTask={createTask} />
			<TaskList tasks={tasks} />
		</>
	);
}

export default App;
