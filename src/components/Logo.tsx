import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = ({ isFooter }: { isFooter?: boolean }) => {
  const navigate = useNavigate();

  return (
    <Box
      textAlign={"center"}
      sx={{ ":hover": { cursor: "pointer" } }}
      onClick={() => navigate("/")}
      color={isFooter ? "white" : undefined}
    >
      <Typography
        variant="h1"
        fontSize={40}
        style={{ textTransform: "capitalize" }}
      >
        Deluxe
      </Typography>
      <Typography fontSize={10}>HOTEL & RESORT</Typography>
    </Box>
  );
};

export default Logo;
