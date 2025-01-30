import { Stack, Typography } from "@mui/material";

interface IBodyPart {
  item?: string;
  bodyPart?: string;
  setBodyPart?: (value: string) => void;
}

export const BodyPart = ({ item, bodyPart, setBodyPart }: any) => {
  return (
    <Stack
      className="bodyPart-card"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        border: "1px solid #e0e0e0",
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "200px",
        height: "210px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={require("../assets/icons/gym.png")}
        alt="dumbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        sx={{ color: "#3a1212", textTransform: "capitalize" }}
      >
        {item}
      </Typography>
    </Stack>
  );
};
