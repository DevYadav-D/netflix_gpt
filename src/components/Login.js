import React, {useState, useRef} from 'react'
import { NETFLIX_BG } from '../utils/constant'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { signIn, signUp, users } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMesssage] = useState(null);

	const email = useRef(null);
	const password = useRef(null);

	const handleButtonClick = () => {
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMesssage(message);
		if(message) return;
		if(!isSignInForm){
			//sign up logic
			const message = signUp(email.current.value, password.current.value);
			console.log("sign up final ",message);
			if(message=== "Sign up successful!"){
				dispatch(addUser({email: email.current.value, password: password.current.value}));
				navigate("/browse");
			}

		}else{

			const message = signIn(email.current.value, password.current.value);
			console.log("sign in message final", message);
			if (message === "Login successful!"){
				dispatch(addUser({email: email.current.value, password: password.current.value}));
				navigate("/browse");
			}
			//sign in logic
		}
	};

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
				<form 
					className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-sm'
					onSubmit={(e)=>{e.preventDefault();}}
				>
					<h1 className='font-bold text-3xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
					{!isSignInForm && (
						<input type="text" placeholder='Name' className='p-2 my-4 w-full bg-gray-600 rounded-sm'/>
					)}
					<input ref={email} type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-600 rounded-sm'/>
					<input ref={password} type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-600 rounded-sm'/>
					<p className='font-bold p-2 text-red-600'>{errorMessage}</p>
					<button className='p-4 my-6 bg-red-600 w-full rounded-sm ' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
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