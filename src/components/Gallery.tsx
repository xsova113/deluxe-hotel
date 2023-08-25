import FlexBetween from "@/components/FlexBetween";
import {
  Box,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface GalleryProps {
  welcomeTitle: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

const Gallery = ({
  description,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  title,
  welcomeTitle,
}: GalleryProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <Box bgcolor={"white"} py={10}>
      <Container maxWidth={isLargeScreen ? "md" : "lg"}>
        <FlexBetween
          sx={{ alignItems: "start" }}
          flexDirection={isLargeScreen ? undefined : "column"}
        >
          <Box>
            <Typography variant="h4" mb={isLargeScreen ? 3 : 1}>
              {welcomeTitle}
              <br />
              <br />{" "}
              <Typography variant="h2" textTransform={"capitalize"}>
                {title}
              </Typography>
            </Typography>
            <Divider variant="inset" />
          </Box>

          <Typography
            color={palette.primary[300]}
            flexBasis={"50%"}
            mt={isLargeScreen ? undefined : 4}
          >
            {description}
          </Typography>
        </FlexBetween>
        <ImageList variant="standard" sx={{ mt: 6 }} cols={4}>
          <ImageListItem cols={2} rows={1}>
            <img src={image1} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={image2} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={image3} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={image4} loading="lazy" />
          </ImageListItem>
          <ImageListItem cols={2} rows={1}>
            <img src={image5} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={image6} loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Container>
    </Box>
  );
};

export default Gallery;
