import { Hotel } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { hotels } from "./constants";

const HotelCards = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <Stack mx={isLargeScreen ? 10 : 3} mt={8} mb={12}>
      <Typography variant="h1" mx={"auto"}>
        Our Hotels
      </Typography>
      <Box
        my={4}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Divider sx={{ width: "35%" }} variant="middle" />
        <Hotel />
        <Divider sx={{ width: "35%" }} variant="middle" />
      </Box>
      {hotels.map((item) => (
        <Card sx={{ mb: 3 }} key={item.title}>
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isLargeScreen ? undefined : "column",
            }}
            href={item.pathname}
          >
            <CardMedia image={item.image} sx={{ width: "100%", height: 270 }} />
            <CardContent
              sx={{
                mr: "auto",
                gap: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack gap={1}>
                <Typography variant="h2">{item.title}</Typography>
                <Typography variant="h4">{item.location}</Typography>
              </Stack>
              <Typography color={palette.primary[400]}>
                {item.Description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};

export default HotelCards;
