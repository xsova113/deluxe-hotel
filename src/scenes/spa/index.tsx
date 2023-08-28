import Heading from "@/components/Heading";
import ServiceInfo from "@/components/ServiceInfo";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SpaPage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <Box
      mt={isLargeScreen ? 18 : 8}
      mb={isLargeScreen ? 12 : 50}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading
        title={"spa service"}
        description={
          "Eiusmod aliquip non irure culpa consequat sunt ad minim excepteur. Minim consequat reprehenderit id ipsum id velit non dolor sit amet officia adipisicing exercitation. Ipsum elit culpa cillum incididunt sunt elit eiusmod commodo exercitation excepteur."
        }
      />
      <Container
        sx={{ display: isLargeScreen ? "flex" : undefined, height: "100%" }}
      >
        <ServiceInfo
          image={"/assets/spa1.png"}
          title={"Spa"}
          description={
            "Enim ad voluptate mollit commodo excepteur eiusmod nostrud in aliqua deserunt consectetur eiusmod eu. Et qui enim pariatur nostrud id non nisi. Esse ut cillum occaecat mollit tempor nulla consectetur exercitation dolor aute. Eiusmod culpa sunt cillum duis culpa magna. "
          }
        />
      </Container>
      <Stack mx={"auto"} mt={isLargeScreen ? 8 : 30} textAlign={"center"}>
        <Typography variant="h2" textTransform={"capitalize"}>
          Book your spa treatment
        </Typography>
        <Divider sx={{ mt: 1, mb: 4 }} variant="middle" />
        <Typography>Spa st, Spacity, V1B1V1</Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          mt={1}
          color={palette.primary.light}
        >
          <Typography>+1 (777)-888-9999</Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} />
          <Typography>spa@info.com</Typography>
        </Box>
        <Button
          href="mailto:spa@info.com"
          sx={{ mt: 4 }}
          size="large"
          variant="contained"
        >
          book your spa treatment
        </Button>
      </Stack>
    </Box>
  );
};

export default SpaPage;
