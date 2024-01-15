import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowHorizontalIconCmp } from "../../components/Icons";
import { usePageStepHook } from "../../hooks/usePageStepHook";
import OnboardingFormStep1Cmp from "./OnboardingFormStep1Cmp";
import OnboardingFormStep2Cmp from "./OnboardingFormStep2Cmp";
import OnboardingFormStep3Cmp from "./OnboardingFormStep3Cmp";
import OnboardingFormStep5Cmp from "./OnboardingFormStep5Cmp";

export default function OnboardingFormCmp() {
  const navigate = useNavigate();
  const { stepNo, handleNext, handlePrev } = usePageStepHook();

  return (
    <Box display="flex" flexDirection="column" rowGap={1} alignItems="center">
      <StepCounterCmp stepNo={stepNo} />
      <Box bgcolor="#fff" borderRadius={4} width="100%">
        <Box p={4}>
          {
            [
              <OnboardingFormStep1Cmp />,
              <OnboardingFormStep2Cmp />,
              <OnboardingFormStep3Cmp />,
              <div>subscriptions info</div>,
              <OnboardingFormStep5Cmp />,
            ][stepNo]
          }
        </Box>
      </Box>
      <ActionButtonsCmp
        stepNo={stepNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleSubmit={() => navigate("/home", { state: { newUser: true } })}
      />
    </Box>
  );
}

function StepCounterCmp({ stepNo }) {
  return (
    <Box display="flex" width="100%">
      {[0, 1, 2, 3, 4].map((el) => {
        const isCurrentStep = stepNo === el;
        const isVisitedStep = stepNo > el;

        return (
          <Box
            key={el}
            display="flex"
            width="100%"
            height={8}
            mx={1}
            borderRadius={100}
            overflow="hidden"
          >
            <Box
              width="50%"
              height="100%"
              bgcolor={isVisitedStep || isCurrentStep ? "primary.main" : "secondary.main"}
              borderRadius={isCurrentStep ? 10 : 0}
            ></Box>
            <Box
              width="50%"
              height="100%"
              bgcolor={isVisitedStep ? "primary.main" : "secondary.main"}
            ></Box>
          </Box>
        );
      })}
    </Box>
  );
}

function ActionButtonsCmp({ stepNo, handleNext, handlePrev, handleSubmit }) {
  if (stepNo === 0)
    return (
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowHorizontalIconCmp />}
        onClick={handleNext}
      >
        Continue
      </Button>
    );

  return (
    <Box display="flex" alignItems="center" width="100%" columnGap={4}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<ArrowHorizontalIconCmp direction="left" />}
        onClick={handlePrev}
      >
        Back
      </Button>
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowHorizontalIconCmp />}
        onClick={stepNo === 4 ? handleSubmit : handleNext}
      >
        Continue
      </Button>
    </Box>
  );
}
