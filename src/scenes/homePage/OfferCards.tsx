import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type OfferCardsProps = {
  image: string;
  label: string;
  description: string;
  pathname: string;
};

const OfferCards = ({
  description,
  image,
  label,
  pathname,
}: OfferCardsProps) => {
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: isLargeScreen ? "400px" : "310px",
        height: "420px",
        ml: 1,
        mb: 6,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={`/assets/${image}.png`}
        alt="offer image"
        loading="lazy"
      />

      <CardContent>
        <Typography gutterBottom variant="h2" component={"div"}>
          {label}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => navigate(pathname)}
          sx={{
            bgcolor: palette.secondary.main,
            color: "white",
            ":hover": { bgcolor: palette.secondary.light },
          }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export default OfferCards;
