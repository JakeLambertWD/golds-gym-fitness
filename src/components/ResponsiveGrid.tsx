import { Box, Grid } from '@mui/material';

import { BodyPart } from './BodyPart';

interface IExerciseData {
	data: string[];
	bodyPart: string;
	setBodyPart: (bodyPart: string) => void;
}

export const ResponsiveGrid = ({ data, bodyPart, setBodyPart }: IExerciseData) => {
	return (
		<Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
			{data.map((item: string) => (
				<Grid key={item} item xs={12} sm={6} md={4} lg={3} xl={2}>
					<BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyPart>
				</Grid>
			))}
		</Grid>
	);
};
