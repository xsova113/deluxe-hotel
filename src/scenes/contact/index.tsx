import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ContactCard from "./ContactCard";
import { ContactSupport } from "@mui/icons-material";
import Faq from "./Faq";
import ContactSection from "../homePage/ContactSection";

const Contact = () => {
  const islargeScreen = useMediaQuery("(min-width: 840px)");

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: islargeScreen ? 16 : 10, pb: 12 }}>
        <Stack>
          <Typography variant="h1" textTransform={"capitalize"} mx={"auto"}>
            Get in Touch
          </Typography>
          <Typography mt={1} mx={"auto"}>
            We would love to hear from you.
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={5}
          >
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{ width: "45%" }}
            />
            <ContactSupport sx={{ fontSize: 40 }} color="action" />
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{ width: "45%" }}
            />
          </Box>

          <Box
            display={"grid"}
            gridTemplateColumns={islargeScreen ? "auto auto auto" : "auto"}
            gap={3}
            mt={8}
          >
            <ContactCard
              title={"Support"}
              description={
                "Fugiat quis dolor qui consequat laborum excepteur. Elit exercitation deserunt tempor esse ea non ullamco esse cupidatat quis. Lorem sit velit amet adipisicing qui adipisicing ipsum nulla ut cupidatat occaecat. Nisi esse dolore minim nostrud adipisicing laboris et."
              }
            />
            <ContactCard
              title={"Media"}
              description={
                "Esse qui qui labore voluptate. Voluptate sunt in quis minim nostrud. Do Lorem officia enim labore consectetur mollit officia laboris proident ut. Cupidatat in ex quis deserunt nostrud velit incididunt voluptate exercitation. "
              }
            />
            <ContactCard
              title={"Press"}
              description={
                "Id esse cupidatat ullamco ad irure aute nisi incididunt nisi labore. Adipisicing amet laboris dolore et eu aute amet non aliquip cupidatat. Incididunt dolore voluptate est nulla. Id proident tempor elit non eu sit adipisicing aliquip mollit est. "
              }
            />
          </Box>
          <Faq />
        </Stack>
      </Container>
      <ContactSection isContactPage />
    </>
  );
};

export default Contact;
