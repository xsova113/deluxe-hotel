import { Check } from "@mui/icons-material";
import {
  Modal,
  Typography,
  Box,
  Fade,
  CircularProgress,
  useTheme,
} from "@mui/material";

interface SuccessModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 8,
  textAlign: "center",
  p: 4,
};

const SuccessModal = ({ handleClose, open }: SuccessModalProps) => {
  const { palette } = useTheme();

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h2" component="h2">
            Hotel Booking Successful
          </Typography>
          <Check sx={{ mt: 2, color: "green" }} fontSize="large" />
          <Typography color={palette.primary.main} sx={{ mt: 2 }}>
            Thank you for choosing Deluxe Hotel
            <br /> enjoy your stay!
          </Typography>
          <Box>
            <Typography color={palette.primary.light} sx={{ mt: 4.5 }}>
              Redirecting to home page ...
            </Typography>
            <CircularProgress sx={{ mt: 2 }} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SuccessModal;
