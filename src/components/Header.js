import React from 'react'
import { NETFLIX_LOGO_F, NETFLIX_USER } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state)=>state.user);

	const handleSignOut = () =>{
		console.log('signout clicked');
		dispatch(removeUser());
		navigate("/");
	}

	return (
		<div className=''>
			<div className='absolute left-0 px-8 py-2 bg-gradient-to-b from black z-10'>
				<img src={NETFLIX_LOGO_F} alt='logo' className='w-44' />
			</div>
			{user && (
				<div className='absolute right-0 py-2 z-10'>
					<img
						alt='user logo'
						src={NETFLIX_USER}
						className='w-12 rounded-lg'
					/>
					<button onClick={handleSignOut}>{"Sign Out"}</button>
				</div>
			)}
		</div>
		
	)
}

export default Header;