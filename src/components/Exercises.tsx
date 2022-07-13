import { useEffect, useState } from 'react';
import { Box, Pagination, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

interface IExercises {
	exercises: {
		bodyPart: string;
		equipment: string;
		gitUrl: string;
		id: string;
		name: string;
		target: string;
	};

	bodyPart: string;
	setExercises: (exercisesData: any) => void;
}

export const Exercises = ({ setExercises, bodyPart, exercises }: any) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [exercisesPerPage, setExercisesPerPage] = useState(6);

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === 'all') {
				exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			} else {
				exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
			}

			setExercises(exercisesData);
		};

		fetchExercisesData();
	}, [bodyPart]);

	return (
		<Box id='exercises' mt='50px' p='20px' sx={{ mt: { lg: '110px' } }}>
			<Typography variant='h3' mb='46px'>
				Showing results
			</Typography>
			<Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '110px', xs: '50px' } }}>
				{exercises.map((exercise: any, index: any) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>

			<Stack alignItems='center' mt='100px'>
				{exercises.length > 9 && (
					<Pagination
						color='standard'
						variant='outlined'
						shape='rounded'
						count={Math.ceil(exercises.length / 9)}
						page={currentPage}
						onChange={paginate}
						size='large'
					/>
				)}
			</Stack>
		</Box>
	);
};
