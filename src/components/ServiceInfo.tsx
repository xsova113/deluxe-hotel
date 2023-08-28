import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

interface ServiceInfoProps {
  image: string;
  title: string;
  description: string;
}

const ServiceInfo = ({ description, image, title }: ServiceInfoProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Box
      display={"flex"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      mr={isLargeScreen ? 30 : undefined}
    >
      <img
        src={image}
        style={{
          objectFit: "cover",
          zIndex: -10,
          width: isLargeScreen ? "55%" : "100%",
          height: isLargeScreen ? 400 : 350,
        }}
      />
      <Stack
        position={"absolute"}
        p={4}
        alignContent={"center"}
        justifyContent={"center"}
        left={isLargeScreen ? "70%" : undefined}
        bottom={isLargeScreen ? undefined : -200}
        bgcolor={"white"}
        width={isLargeScreen ? "40%" : "90%"}
        textAlign={isLargeScreen ? "start" : "center"}
        boxShadow={8}
      >
        <Typography variant="h3" textTransform={"uppercase"}>
          {title}
        </Typography>
        <Divider sx={{ mb: 3, mt: 1 }} />
        <Typography>{description}</Typography>
      </Stack>
    </Box>
  );
};

export default ServiceInfo;
