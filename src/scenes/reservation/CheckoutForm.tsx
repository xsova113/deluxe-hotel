import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  Button,
  Box,
  Link,
} from "@mui/material";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import {
  setCreditCardNumber,
  setCreditCardType,
} from "@/state/reservationSlice";

const CheckoutForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    address,
    city,
    country,
    creditCardNumber,
    creditCardType,
    email,
    firstName,
    lastName,
    phone,
    province,
    postalCode,
  } = useSelector((state: RootState) => state.reservation);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(window.location.search);
  const checkInDate = useSelector(
    (state: RootState) => state.availability.checkInDate
  );
  const checkOutDate = useSelector(
    (state: RootState) => state.availability.checkOutDate
  );
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);
  const handleClick = async () => {
    try {
      setIsSubmitting(true);
      await axios.post(`${import.meta.env.VITE_REACT_API_URL}/reservations`, {
        roomId: searchParams.get("id"),
        checkInDate,
        checkOutDate,
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        city,
        province,
        creditCardNumber,
        creditCardType,
        postalCode,
      });
      setOpen(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(<Typography>{error.message}</Typography>);
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 3000);
      setIsSubmitting(false);
    }
  };

  return (
    <Stack width={"100%"} gap={3.5}>
      <Typography>
        A credit card is needed to confirm and guarantee your reservation
        <br />
        <b>You will not be charged today</b> unless your rate requires a deposit
        or prepayment.
      </Typography>
      <TextField
        disabled={isSubmitting}
        fullWidth
        label="Credit Card Number"
        required
        onChange={(e) => dispatch(setCreditCardNumber(e.target.value))}
        helperText="Please omit any spaces when entering your credit card number."
      />
      <TextField
        disabled={isSubmitting}
        select
        label="Credit Card Type"
        required
        onChange={(e) => dispatch(setCreditCardType(e.target.value))}
      >
        <MenuItem value={"Visa"}>Visa</MenuItem>
        <MenuItem value={"MasterCard"}>MasterCard</MenuItem>
        <MenuItem value={"American Express"}>American Express</MenuItem>
        <MenuItem value={"Discover"}>Discover</MenuItem>
      </TextField>
      <Box display={"flex"} alignItems={"center"}>
        <Checkbox
          required
          sx={{ p: 0, pr: 1 }}
          onClick={() => setIsChecked(!isChecked)}
        />
        <Typography>I accept the&nbsp;</Typography>
        <Link>Terms and Conditions</Link>&nbsp;*
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1.5}>
        <Typography fontSize={12}>
          Any required deposit will be charged to this credit card. For more
          info, see Full Rate Summary.
        </Typography>
        <Typography fontSize={12}>
          * I have read and agree to the reservation terms and conditions stated
          above.
        </Typography>
        <Typography fontSize={12}>
          * I understand that by selecting Confirm the Reservation button, I am
          authorizing a charge on the credit card number provided to purchase
          the room and tax as specified in the reservation details. I understand
          that the cancellation policy stated in the Full Room Rate Summary is
          in effect.
        </Typography>
      </Box>
      <Button
        disabled={isSubmitting || !isChecked}
        onClick={handleClick}
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
      >
        confirm the reservation
      </Button>
      <SuccessModal open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default CheckoutForm;
