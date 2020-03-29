import React, { Component } from 'react';
import Background from '../assets/background.jpg';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				{/* <img
					src={Background}
					className='mb-5'
					style={{ width: '100%', height: '200px' }}
				/> */}
				<div class='position-relative overflow-hidden  text-center bg-warning' style={{
                    backgroundImage:  `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover'
                }}>
					<div class='col-md-5 p-lg-5 mx-auto my-5'>
						<h1 class='display-4 font-weight-normal'>
							To Do App
						</h1>
                        <p class='lead font-weight-normal'>
                            For every minute spent organizing, an hour is earned.
						</p>
						<p>
                            Let's create your To-Do list here!
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
