import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { FaReact } from 'react-icons/fa';

function App() {
	return (
		<main className="bg-teal-900 h-screen">
			<div className="w-full bg-black">
				<h1 className="text-3xl text-center py-6 text-white font-extrabold">
					Task List app by:{' '}
					<a
						className="text-sky-400 hover:text-sky-600 none"
						href="https://www.instagram.com/abe.dev_/"
					>
						Abraham Canul <FaReact className="inline-flex mb-1" />
					</a>
				</h1>
			</div>

			<div className="container mx-auto p-10">
				<TaskForm />
				<TaskList />
			</div>
		</main>
	);
}

export default App;
