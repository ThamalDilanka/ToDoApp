import React, { Component } from 'react';
import ToDoTask from './ToDoTask';
import PropTypes from 'prop-types';

class ToDoTasks extends Component {



	render() {
		return (
			<table className='table'>
				<tbody>
					{this.props.toDoTasks.map(toDoTask => (
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
