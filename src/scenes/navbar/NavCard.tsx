import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  title: string;
  pathname?: string;
  setIsOpen: (value: boolean) => void;
  setIsToggled?: (value: boolean) => void;
}

const NavCard = ({
  image,
  title,
  pathname,
  setIsOpen,
  setIsToggled,
}: DestinationCardProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: isLargeScreen ? 200 : 360,
        boxShadow: 0,
        mb: isLargeScreen ? 0 : 4,
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`/${pathname}`);
          setIsOpen(false);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setIsToggled(false);
        }}
      >
        <CardMedia
          sx={{ height: isLargeScreen ? 240 : 500, objectFit: "cover" }}
          image={image}
        />
        <CardContent>
          <Typography component="p">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NavCard;
