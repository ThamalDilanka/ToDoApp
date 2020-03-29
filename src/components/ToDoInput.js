import React, { Component } from 'react';
import { Plus, Bookmark } from 'react-bootstrap-icons';

class ToDoInput extends Component {
	onChange = e => this.props.onChange(e);
	onSubmit = e => this.props.onSubmit(e);

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className='input-group mb-5'>
					<input
						type='text'
						className='form-control'
						placeholder='Add new task here'
						value={this.props.toDoInput}
						onChange={this.onChange}
					/>
					<div className='input-group-append'>
						<button
							className='btn btn-outline-primary'
							type='submit'
						>
							{this.props.toDoUpdateId === -1 ? (
								<Plus />
							) : (
								<Bookmark />
							)}
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default ToDoInput;
