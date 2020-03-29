import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pencil, Trash, ArrowCounterclockwise } from 'react-bootstrap-icons';
import '../components/component.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
				<tr className='d-flex'>
					<td className='col-1'>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.toDoTask.completed}
									onChange={this.props.markComplete.bind(
										this,
										id
									)}
									name='checkedB'
									color='primary'
								/>
							}
						/>
					</td>
					<td className='col-8' style={this.getStyle()}>
						{task}
					</td>
					<td className='col-3 text-right'>
						<div
							className='btn-group btn-group-sm'
							role='group'
							aria-label='Basic example'
						>
							{this.props.toDoTask.completed ? (
								<button
									type='button'
									className='btn btn-outline-info'
									disabled
									onClick={this.props.updateTask.bind(
										this,
										id
									)}
								>
									<Pencil size={12} />
								</button>
							) : this.props.toDoUpdateId !==
							  this.props.toDoTask.id ? (
								<button
									type='button'
									className='btn btn-outline-info'
									onClick={this.props.updateTask.bind(
										this,
										id
									)}
								>
									<Pencil size={12} />
								</button>
							) : (
								<button
									type='button'
									className='btn btn-outline-info'
									onClick={this.props.onResetTask}
								>
									<ArrowCounterclockwise size={12} />
								</button>
							)}

							<button
								type='button'
								className='btn btn-outline-danger'
								onClick={this.props.deleteTask.bind(this, id)}
							>
								<Trash size={12} />
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
