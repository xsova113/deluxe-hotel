import {
  Box,
  Button,
  Container,
  Step,
  StepButton,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import FormSteps from "./FormSteps";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const steps = [
  "Check availability",
  "Select a room",
  "Make reservation",
  "Overview",
];

const Reservation = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const checkInDate = useSelector(
    (state: RootState) => state.availability.checkInDate
  );
  const checkOutDate = useSelector(
    (state: RootState) => state.availability.checkOutDate
  );

  const [isValidDate, setIsValidDate] = useState(true);

  useEffect(() => {
    setIsValidDate(checkOutDate!.diff(checkInDate) >= 0);
  }, [checkInDate, checkOutDate]);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth={"lg"} sx={{ pt: isLargeScreen ? 18 : 8, pb: 12 }}>
      <Typography variant="h1" fontWeight={"bold"} textAlign={"center"} mb={8}>
        Reservation
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...labelProps}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>

      <>
        <FormSteps
          isValidDate={isValidDate}
          activeStep={activeStep}
          handleNext={handleNext}
        />
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep < 1 && (
            <Button disabled={!isValidDate} onClick={handleNext}>
              next
            </Button>
          )}
        </Box>
      </>
    </Container>
  );
};

export default Reservation;
