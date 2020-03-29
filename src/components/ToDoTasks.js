import React, { Component } from 'react';
import ToDoTask from './ToDoTask';
import PropTypes from 'prop-types';

class ToDoTasks extends Component {
	render() {
		const pending = [
			...this.props.toDoTasks.filter(
				toDoTask => toDoTask.completed !== true
			)
		];

		const completed = [
			...this.props.toDoTasks.filter(
				toDoTask => toDoTask.completed === true
			)
		];

		return (
			<table className='table mb-5'>
				<tbody>
					{pending.length !== 0 ? (
						<tr>
							<td>
								<div
									className='alert alert-warning '
									role='alert'
								>
									Pending{' '}
									<span className='badge badge-warning'>
										{pending.length}
									</span>
								</div>
							</td>
						</tr>
					) : null}

					{pending.map(toDoTask => (
						<ToDoTask
							key={toDoTask.id}
							toDoTask={toDoTask}
							markComplete={this.props.markComplete}
							deleteTask={this.props.deleteTask}
							updateTask={this.props.updateTask}
							toDoUpdateId={this.props.toDoUpdateId}
							onResetTask={this.props.onResetTask}
						/>
					))}

					{completed.length !== 0 ? (
						<tr>
							<td>
								<div
									className='alert alert-success '
									role='alert'
								>
									Completed{' '}
									<span className='badge badge-success'>
										{completed.length}
									</span>
								</div>
							</td>
						</tr>
					) : null}

					{completed.map(toDoTask => (
						<ToDoTask
							key={toDoTask.id}
							toDoTask={toDoTask}
							markComplete={this.props.markComplete}
							deleteTask={this.props.deleteTask}
							updateTask={this.props.updateTask}
							toDoUpdateId={this.props.toDoUpdateId}
							onResetTask={this.props.onResetTask}
						/>
					))}
				</tbody>
			</table>
		);
	}
}

// Validate props
ToDoTasks.prototypes = {
	toDoTasks: PropTypes.array.isRequired
};

export default ToDoTasks;
