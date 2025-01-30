import { Box } from "@mui/material";

import { BodyPart } from "./BodyPart";

interface IExerciseData {
  data: string[];
  bodyPart?: string;
  setBodyPart?: (bodyPart: string) => void;
}

export const ResponsiveGrid = ({
  data,
  bodyPart,
  setBodyPart,
}: IExerciseData) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "scroll",
        padding: "20px",
      }}
    >
      {data.map((item: string) => (
        <Box key={item} sx={{ flex: "0 0 auto", marginRight: "20px" }}>
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          ></BodyPart>
        </Box>
      ))}
    </Box>
  );
};
