import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export const Navbar = () => {
	return (
		<Stack
			direction='row'
			justifyContent='space-around'
			px='20px'
			sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '40px' }, justifyContent: 'none' }}
		>
			<Link to='/'>
				<img src={require('../assets/images/Logo.png')} alt='Logo' style={{ width: '48px', height: '48px', margin: '0 20px' }} />
			</Link>
			<Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
				<Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #3A1212' }}>
					Home
				</Link>
				<a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>
					Exercises
				</a>
			</Stack>
		</Stack>
	);
};
