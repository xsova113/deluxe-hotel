import Heading from "@/components/Heading";
import ServiceInfo from "@/components/ServiceInfo";
import { Box, Container, useMediaQuery } from "@mui/material";

const PoolPage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Box
      mt={isLargeScreen ? 18 : 8}
      mb={10}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading
        title={"pool service"}
        description={
          "Eiusmod aliquip non irure culpa consequat sunt ad minim excepteur. Minim consequat reprehenderit id ipsum id velit non dolor sit amet officia adipisicing exercitation. Ipsum elit culpa cillum incididunt sunt elit eiusmod commodo exercitation excepteur."
        }
      />
      <Container sx={{ display: isLargeScreen ? "flex" : undefined }}>
        <ServiceInfo
          image={"/assets/pool1.png"}
          title={"Pool"}
          description={
            "Enim ad voluptate mollit commodo excepteur eiusmod nostrud in aliqua deserunt consectetur eiusmod eu. Et qui enim pariatur nostrud id non nisi. Esse ut cillum occaecat mollit tempor nulla consectetur exercitation dolor aute. Eiusmod culpa sunt cillum duis culpa magna. "
          }
        />
      </Container>
    </Box>
  );
};

export default PoolPage;
