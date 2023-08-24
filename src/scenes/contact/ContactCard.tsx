import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

interface ContactCardProps {
  title: string;
  description: string;
}

const ContactCard = ({ description, title }: ContactCardProps) => {
  const { palette } = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography component={"h1"} fontWeight={"bold"} fontSize={16}>
          {title}
        </Typography>
        <Typography component={"p"} my={2}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          href="mailto:1@1.com"
          sx={{
            bgcolor: palette.secondary.main,
            ":hover": { bgcolor: palette.secondary.light },
          }}
        >
          Contact us
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
