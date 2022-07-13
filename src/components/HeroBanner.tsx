import { Box, Button, Typography } from '@mui/material';

export const HeroBanner = () => {
	return (
		<Box sx={{ mt: { lg: '130px', xs: '70px' } }} position='relative' p='20px'>
			<Typography color='#ff2625' fontWeight='600' fontSize='26px'>
				City Fitness Club
			</Typography>
			<Typography fontWeight={700} mb='23px' mt='30px' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
				Nothing works, <br />
				unless you do
			</Typography>
			<Typography fontSize='22px' lineHeight='35px' mb={4}>
				Extensive array of exercises
			</Typography>

			<Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
				Search index here
			</Button>

			<Typography fontWeight={600} color='#ff2625' fontSize={200} sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}>
				Exercise
			</Typography>
			<img src={require('../assets/images/banner.png')} alt='B' className='hero-banner-img' />
		</Box>
	);
};
