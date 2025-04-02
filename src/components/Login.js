import React, {useState} from 'react'
import { NETFLIX_BG } from '../utils/constant'
import Header from './Header'

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	console.log("render")
	const toggleSignInForm = (e) =>{
		e.preventDefault();
		setIsSignInForm(!isSignInForm);
	}
	return (
		<div>
			<Header />
			<div className='absolute'>
				<img src={NETFLIX_BG} alt='background logo' />
			</div>
			<div className=''>
				<form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-sm'>
					<h1 className='font-bold text-3xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
					{!isSignInForm && (
						<input type="text" placeholder='Name' className='p-2 my-4 w-full bg-gray-600'/>
					)}
					<input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600'/>
					<input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-600'/>
					<button className='p-4 my-6 bg-red-600 w-full '>{isSignInForm?"Sign In":"Sign Up"}</button>
					<p className='py-4'>
						{isSignInForm
							? (
								<>
									New to Netflix?<button onClick={toggleSignInForm} className='font-thin'>Sign Up now</button>
								</>
							):(
								<> 
									Already resgitered?<button onClick={toggleSignInForm} className='font-thin'>Sign In now</button>
								</>
							)
						}
					</p>
				</form>
			</div>
			
			
		</div>
	)
}

export default Login;