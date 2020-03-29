import React, { Component } from 'react';
import './App.css';
import ToDoTasks from './components/ToDoTasks';
import ToDoInput from './components/ToDoInput';
import SweetAlert from 'react-bootstrap-sweetalert';

class App extends Component {
	state = {
		toDoTasks: [
			{
				id: 1,
				task: 'Create a new folder',
				completed: false
			},
			{
				id: 2,
				task: 'Clone the project in to the folder',
				completed: false
			},
			{
				id: 3,
				task: 'Edit app.js file to display data',
				completed: false
			}
		],
		toDoInput: '',
		toDoUpdateId: -1,
		toDoDeleteId: -1,
		showDeleteAlert: false
	};

	// Toggle completed
	markComplete = id => {
		this.setState({
			toDoTasks: this.state.toDoTasks.map(toDoTask => {
				if (toDoTask.id === id) {
					toDoTask.completed = !toDoTask.completed;
				}
				return toDoTask;
			})
		});
	};

	confirmDelete = id => {
		this.setState({
			showDeleteAlert: true,
			toDoDeleteId: id
		});
	};

	// Delete task
	deleteTask = () => {
		let mutex = 'NotFound';
		let newToDoTasks = [];

		// Re Arrange IDs
		this.state.toDoTasks.forEach(toDoTask => {
			if (this.state.toDoDeleteId === toDoTask.id) {
				mutex = 'Found';
				return;
			}
			if (mutex === 'NotFound') {
				newToDoTasks.push(toDoTask);
			} else {
				const { id, task, completed } = toDoTask;
				newToDoTasks.push({ id: id - 1, task, completed });
			}
		});

		this.setState({
			toDoTasks: newToDoTasks,
			toDoDeleteId: -1,
			showDeleteAlert: false
		});
	};

	// Add todo task
	addToDoTask = (id, task) => {
		if (task !== '') {
			let newToDoTask = {};
			if (id === -1) {
				newToDoTask = {
					id: this.state.toDoTasks.length + 1,
					task,
					completed: false
				};

				this.setState({
					toDoTasks: [...this.state.toDoTasks, newToDoTask]
				});
			} else {
				newToDoTask = {
					id,
					task,
					completed: this.state.toDoTasks.find(
						toDoTask => toDoTask.id === id
					).completed
				};

				this.setState({
					toDoTasks: this.state.toDoTasks.map(task =>
						task.id === id ? newToDoTask : task
					)
				});
			}
		}
	};

	// Update
	updateTaskHandler = id => {
		this.setState({
			toDoInput: this.state.toDoTasks.find(toDoTask => toDoTask.id === id)
				.task,
			toDoUpdateId: id
		});
	};

	onChangeHandler = e => this.setState({ toDoInput: e.target.value });

	onSubmitHandler = e => {
		e.preventDefault();
		this.addToDoTask(this.state.toDoUpdateId, this.state.toDoInput);
		this.setState({ toDoInput: '', toDoUpdateId: -1 });
	};

	render() {
		return (
			<div className='container mt-5'>
				<ToDoInput
					addToDoTask={this.addToDoTask}
					onSubmit={this.onSubmitHandler}
					toDoInput={this.state.toDoInput}
					onChange={this.onChangeHandler}
				/>
				<ToDoTasks
					toDoTasks={this.state.toDoTasks}
					markComplete={this.markComplete}
					deleteTask={this.confirmDelete}
					updateTask={this.updateTaskHandler}
				/>

				{this.state.showDeleteAlert ? (
					<SweetAlert
						warning
						showCancel
						confirmBtnText='Yes, delete it!'
						confirmBtnBsStyle='danger'
						cancelBtnBsStyle='default'
						title='Are you sure?'
						onConfirm={this.deleteTask}
						onCancel={() => {
							this.setState({ showDeleteAlert: false });
						}}
					>
						You will not be able to recover this imaginary file!
					</SweetAlert>
				) : null}
			</div>
		);
	}
}

export default App;
