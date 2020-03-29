import React, { Component } from 'react';

class PlaceHolder extends Component {
	render() {
		return (
			<div className='place-holder-container'>
				<div className='col-md-5 p-lg-5 mx-auto my-5'>
					<p className='lead font-weight-normal text-center'>
						Your To-Do list currently empty!
					</p>
					<p className='text-center'>Let's add something</p>
				</div>
			</div>
		);
	}
}

export default PlaceHolder;
