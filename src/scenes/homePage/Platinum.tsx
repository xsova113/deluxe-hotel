import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Platinum = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      height={"400px"}
      position={"relative"}
      color={"white"}
      mx={isLargeScreen ? 6 : 1}
      mt={4}
    >
      <Box width={isLargeScreen ? "60%" : "90%"} p={4}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="h1" fontWeight={"bold"}>
            Deluxe Platinum
          </Typography>
          <Typography variant="h4">Join Deluxe platinum membership</Typography>
        </Box>
        <Typography width={isLargeScreen ? "80%" : "100%"} mx={"auto"} mt={4}>
          Mollit et sit excepteur aliquip ex deserunt eu dolore non occaecat
          nostrud excepteur esse ut. Laboris fugiat qui sit officia ex enim
          enim. Enim proident exercitation do deserunt in. Eiusmod magna velit
          deserunt veniam ex cupidatat aliquip dolor ut laboris officia
          excepteur anim.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          bgcolor: palette.secondary.main,
          fontWeight: "bold",
          ":hover": { bgcolor: palette.secondary.light },
        }}
      >
        learn more
      </Button>
      <img
        src="/assets/platinum.png"
        alt="platinum-image"
        style={{
          position: "absolute",
          zIndex: -10,
          objectFit: "cover",
          filter: "brightness(70%)",
          height: "450px",
          width: "100%",
          borderRadius: 12,
        }}
        loading="eager"
      />
    </Box>
  );
};

export default Platinum;
