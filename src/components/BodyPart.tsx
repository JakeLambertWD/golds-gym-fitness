import { Stack, Typography } from '@mui/material';

interface IBodyPart {
	item: string;
	bodyPart: string;
	setBodyPart: {
		// item: string;
		// bodyPart: string;
		// setBodyPart: () => {};
	};
}

export const BodyPart = ({ item, bodyPart, setBodyPart }: IBodyPart) => {
	return (
		<Stack
			className='bodyPart-card'
			sx={{
				borderTop: bodyPart === item ? '4px solid #ff2625' : '',
				backgroundColor: '#fff',
				borderBottomLeftRadius: '20px',
				width: '200px',
				height: '210px',
				cursor: 'pointer'
			}}
		>
			<img src={require('../assets/icons/gym.png')} alt='dumbell' style={{ width: '40px', height: '40px' }} />
			<Typography fontSize='24px' fontWeight='bold' sx={{ color: '#3a1212', textTransform: 'capitalize' }}>
				{item}
			</Typography>
		</Stack>
	);
};
