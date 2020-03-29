import React, { Component } from 'react';
import '../components/component.css';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='todo-header position-relative overflow-hidden  text-center bg-light'>
					<div className='col-md-5 p-lg-5 mx-auto my-5'>
						<h1 className='display-4 font-weight-normal'>
							To-Do App
						</h1>
						<p className='lead font-weight-normal'>
							For every minute spent organizing, an hour is
							earned.
						</p>
						<p>Let's create your To-Do list here!</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
