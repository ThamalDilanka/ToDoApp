import React, { Component } from 'react';
import './App.css';
import ToDoTasks from './components/ToDoTasks';
import ToDoInput from './components/ToDoInput';
import Header from './components/Header';
import SweetAlert from 'react-bootstrap-sweetalert';
import uuid from 'react-uuid';

class App extends Component {
	state = {
		toDoTasks: [
			{
				id: uuid(),
				task: 'Create a new folder',
				completed: false
			},
			{
				id: uuid(),
				task: 'Clone the project in to the folder',
				completed: false
			},
			{
				id: uuid(),
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
		const checkedTask = this.state.toDoTasks.find(
			toDoTask => toDoTask.id === id
		);

		checkedTask.completed = !checkedTask.completed;

		if (checkedTask.completed) {
			this.setState({
				toDoTasks: [
					...this.state.toDoTasks.filter(
						toDoTask => toDoTask.id !== id
					),
					checkedTask
				]
			});
		} else {
			this.setState({
				toDoTasks: [
					checkedTask,
					...this.state.toDoTasks.filter(
						toDoTask => toDoTask.id !== id
					)
				]
			});
		}
	};

	confirmDelete = id => {
		this.setState({
			showDeleteAlert: true,
			toDoDeleteId: id
		});
	};

	// Delete task
	deleteTask = () => {
		this.setState({
			toDoTasks: [
				...this.state.toDoTasks.filter(
					toDoTask => toDoTask.id !== this.state.toDoDeleteId
				)
			],
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
					id: uuid(),
					task,
					completed: false
				};

				this.setState({
					toDoTasks: [newToDoTask, ...this.state.toDoTasks]
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

	onResetTaskHandler = () => {
		console.log('object');
		this.setState({
			toDoUpdateId: -1,
			toDoInput: ''
		});
	};

	render() {
		return (
			<div>
				<Header />
				<div className='container mt-5'>
					<ToDoInput
						addToDoTask={this.addToDoTask}
						onSubmit={this.onSubmitHandler}
						toDoInput={this.state.toDoInput}
						onChange={this.onChangeHandler}
						toDoUpdateId={this.state.toDoUpdateId}
					/>
					<ToDoTasks
						toDoTasks={this.state.toDoTasks}
						markComplete={this.markComplete}
						deleteTask={this.confirmDelete}
						updateTask={this.updateTaskHandler}
						toDoUpdateId={this.state.toDoUpdateId}
						onResetTask={this.onResetTaskHandler}
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
							You will not be able to recover this action!
						</SweetAlert>
					) : null}
				</div>
			</div>
		);
	}
}

export default App;
