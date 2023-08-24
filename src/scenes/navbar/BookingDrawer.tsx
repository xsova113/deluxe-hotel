import {
  Button,
  Container,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

const BookingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const formSchema = object({
    roomId: string().required(),
    lastName: string().required(),
    email: string().required().email("Not a proper email address"),
  });

  return (
    <>
      <Button
        id="destination"
        variant="contained"
        onClick={() => setIsOpen(!isOpen)}
      >
        My booking
      </Button>
      <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
        <Container sx={{ my: 8, width: 400 }}>
          <Typography variant="h3" mb={3.5}>
            Find Your Bookings
          </Typography>
          <Formik
            initialValues={{ roomId: "", lastName: "", email: "" }}
            validationSchema={formSchema}
            onSubmit={({ roomId }) => {
              navigate(`/myBookings/${roomId}`);
              setIsOpen(false);
            }}
          >
            {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
              <Form
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <TextField
                  variant="standard"
                  label="Confirmation ID"
                  type="text"
                  name="roomId"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.roomId}
                  disabled={isSubmitting}
                  error={Boolean(errors.roomId)}
                  helperText={errors.roomId}
                />
                <TextField
                  variant="standard"
                  type="text"
                  name="lastName"
                  label={"Last Name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  disabled={isSubmitting}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
                <TextField
                  variant="standard"
                  label="Email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  disabled={isSubmitting}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                  Find bookings
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{ position: "absolute", left: 0, m: 2 }}
        >
          <Close />
        </IconButton>
      </Drawer>
    </>
  );
};

export default BookingDrawer;
