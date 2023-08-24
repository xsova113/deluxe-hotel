import { Container } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Overview from "./Overview";

interface FormStepsProps {
  activeStep: number;
  handleNext: () => void;
  isValidDate: boolean;
}

const FormSteps = ({ activeStep, handleNext, isValidDate }: FormStepsProps) => {
  return (
    <Container sx={{ mt: 6, mb: 4 }}>
      {activeStep === 0 && (
        <Step1 isValidDate={isValidDate} activeStep={activeStep} />
      )}
      {activeStep === 1 && (
        <Step2 handleNext={handleNext} activeStep={activeStep} />
      )}
      {activeStep === 2 && (
        <Step3 handleNext={handleNext} activeStep={activeStep} />
      )}
      {activeStep === 3 && <Overview />}
    </Container>
  );
};

export default FormSteps;
