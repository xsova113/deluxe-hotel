import { Stack, Typography, useMediaQuery } from "@mui/material";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading = ({ description, title }: HeadingProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Stack gap={2} mx={"auto"} textAlign={"center"}>
      <Typography variant="h1" textTransform={"capitalize"}>
        {title}
      </Typography>
      <Typography mb={8} width={isLargeScreen ? "70%" : "90%"} mx={"auto"}>
        {description}
      </Typography>
    </Stack>
  );
};

export default Heading;
