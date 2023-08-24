import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  useMediaQuery,
} from "@mui/material";

interface DestinationCardProps {
  image: string;
  title: string;
}

const NavCard = ({ image, title }: DestinationCardProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Card sx={{ width: isLargeScreen ? 200 : 360, boxShadow: 0, mb: isLargeScreen ? 0 : 4 }}>
      <CardActionArea>
        <CardMedia sx={{ height: isLargeScreen ? 240 : 500, objectFit: "cover" }} image={image} />
        <CardContent>
          <Typography component="p">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NavCard;
