import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import TaskList from './TaskList';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<TaskList />
	</React.StrictMode>
);
