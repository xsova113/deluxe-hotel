import {
  setAddress,
  setCity,
  setCountry,
  setEmail,
  setFirstName,
  setLastName,
  setPhone,
  setPostalCode,
  setProvince,
} from "@/state/reservationSlice";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { object, string } from "yup";

interface Step3Props {
  activeStep: number;
  handleNext: () => void;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().email("Not a proper email address"),
  phone: string().required().matches(phoneRegExp, "Phone number is not valid"),
  address: string().required(),
  city: string().required(),
  country: string().required(),
  province: string().required(),
  postalCode: string().required(),
});

const Step3 = ({ activeStep, handleNext }: Step3Props) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h2">
        Step {activeStep + 1} - Make Reservation
      </Typography>

      <Box mt={4}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            province: "",
            postalCode: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value) => {
            dispatch(setFirstName(value.firstName));
            dispatch(setLastName(value.lastName));
            dispatch(setEmail(value.email));
            dispatch(setPhone(value.phone));
            dispatch(setAddress(value.address));
            dispatch(setCity(value.city));
            dispatch(setCountry(value.country));
            dispatch(setProvince(value.province));
            dispatch(setPostalCode(value.postalCode));
            handleNext();
          }}
        >
          {({ values, handleChange, handleBlur, isSubmitting, errors }) => (
            <Form id="reservation" style={{ display: "flex", flexDirection: "column" }}>
              <Box
                display={"grid"}
                columnGap={3}
                rowGap={3}
                gridTemplateColumns={isLargeScreen ? "50% 1fr" : "1fr"}
              >
                <TextField
                  type="text"
                  name="firstName"
                  label={"First Name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  disabled={isSubmitting}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
                <TextField
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
                  type="text"
                  name="email"
                  label={"Email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  disabled={isSubmitting}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  type="number"
                  name="phone"
                  label={"Phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  disabled={isSubmitting}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
                <TextField
                  type="text"
                  name="address"
                  label={"Address"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  disabled={isSubmitting}
                  error={Boolean(errors.address)}
                  helperText={errors.address}
                />
                <TextField
                  type="text"
                  name="city"
                  label={"City"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  disabled={isSubmitting}
                  error={Boolean(errors.city)}
                  helperText={errors.city}
                />
                <TextField
                  type="text"
                  name="country"
                  label={"Country"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  disabled={isSubmitting}
                  error={Boolean(errors.country)}
                  helperText={errors.country}
                />
                <TextField
                  type="text"
                  name="province"
                  label={"Province"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.province}
                  disabled={isSubmitting}
                  error={Boolean(errors.province)}
                  helperText={errors.province}
                />
                <TextField
                  type="text"
                  name="postalCode"
                  label={"Postal Code"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                  disabled={isSubmitting}
                  error={Boolean(errors.postalCode)}
                  helperText={errors.postalCode}
                />
              </Box>

              <Button
                sx={{ mt: 3, mx: "auto" }}
                size="large"
                type="submit"
                disabled={isSubmitting}
                variant="contained"
              >
                continue
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Step3;
