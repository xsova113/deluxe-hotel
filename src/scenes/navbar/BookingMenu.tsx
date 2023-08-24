import { Button, Menu, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

const formSchema = object({
  roomId: string().required(),
  lastName: string().required(),
  email: string().required().email("Not a proper email address"),
});

export default function BookingMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = async (roomId: string) => {
    navigate(`myBookings/${roomId}`);
  };

  return (
    <div>
      <Button
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        my bookings
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Container sx={{ my: 2, width: 400 }}>
          <Typography mb={3.5} variant="h3">
            Find Your Bookings
          </Typography>
          <Formik
            initialValues={{ roomId: "", lastName: "", email: "" }}
            validationSchema={formSchema}
            onSubmit={({ roomId }) => onSubmit(roomId)}
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
      </Menu>
    </div>
  );
}
