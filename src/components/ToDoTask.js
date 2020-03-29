import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pencil, Trash } from 'react-bootstrap-icons';

class ToDoTask extends Component {
	getStyle = () => {
		if (this.props.toDoTask.completed) {
			return {
				textDecoration: 'line-through'
			};
		} else {
			return {
				textDecoration: 'none'
			};
		}
	};

	render() {
		const { id, task } = this.props.toDoTask;
		return (
			<React.Fragment>
				<tr>
					<td>
						<input
							type='checkbox'
							onChange={this.props.markComplete.bind(this, id)}
						/>
					</td>
					<td>{this.props.toDoTask.id}</td>
					<td style={this.getStyle()}>{task}</td>
					<td>
						<div
							className='btn-group btn-group-sm'
							role='group'
							aria-label='Basic example'
						>
							<button
								type='button'
								className='btn btn-info'
								onClick={this.props.updateTask.bind(this, id)}
							>
								<Pencil color='white' size={12} />
							</button>

							<button
								type='button'
								className='btn btn-warning'
								onClick={this.props.deleteTask.bind(this, id)}
							>
								<Trash color='white' size={12} />
							</button>
						</div>
					</td>
				</tr>
			</React.Fragment>
		);
	}
}

// Validate props
ToDoTask.prototypes = {
	toDoTasks: PropTypes.array.isRequired
};

export default ToDoTask;
