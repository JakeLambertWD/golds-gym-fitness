import { fetchData, exerciseOptions } from '../utils/fetchData';

import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

interface ISearchedExercises {
	bodyPart: string;
	equipment: string;
	gifUrl: string;
	id: string;
	name: string;
	target: string;
}

export const SearchExercises = () => {
	const [search, setSearch] = useState('');

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

			const searchedExercises = exercisesData.filter((exercise: ISearchedExercises) => exercise.name.toLowerCase().includes(search));
			console.log(searchedExercises);
		}
	};

	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography fontWeight={700} mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
				Awesome exercises you <br /> should know
			</Typography>
			<Box position='relative' mb='72px'>
				<TextField
					sx={{
						backgroundColor: '#fff',
						borderRadius: '40px',
						width: { lg: '50vw', xs: '60vw' },
						input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
						height: '76px'
					}}
					value={search}
					onChange={e => setSearch(e.target.value.toLowerCase())}
					placeholder='Search Exercises'
					type='text'
				/>
				<Button
					className='search-btn'
					onClick={handleSearch}
					sx={{
						bgcolor: '#ff2625',
						color: '#fff',
						textTransform: 'none',
						width: { lg: '175px', xs: '80px' },
						fontSize: { lg: '20px', xs: '14px' },
						height: '56px',
						position: 'absolute',
						right: '0'
					}}
				>
					Search
				</Button>
			</Box>
		</Stack>
	);
};
