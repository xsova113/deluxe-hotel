import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

interface DestinationCardProps {
  image: string;
  title: string;
}

const DestinationCard = ({ image, title }: DestinationCardProps) => {
  return (
    <Card sx={{ width: 200, boxShadow: 0 }}>
      <CardActionArea>
        <CardMedia sx={{ height: 240, objectFit: "cover" }} image={image} />
        <CardContent>
          <Typography component="p">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DestinationCard;
