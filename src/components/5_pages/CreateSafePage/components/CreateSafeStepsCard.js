import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { createSafeSteps } from "@/utils/consts";
import { formatNumber } from "@/utils/funcs";
import {
  Box,
  Button,
  Flex,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useColorMode,
  useSteps,
} from "@chakra-ui/react";

const CreateSafeStepsCard = ({
  assetClass,
  onCreateSafe,
  onApproval,
  submittingApproval,
  disableCreateButton,
  disableApprovalButton,
}) => {
  const { colorMode } = useColorMode();
  const { activeStep } = useSteps({
    index: 0,
    count: createSafeSteps.length,
  });

  return (
    <Stack
      px="3rem"
      py="2rem"
      rounded="md"
      border="1px"
      borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
      w="25rem"
    >
      <Stepper
        index={activeStep}
        orientation="vertical"
        height="100%"
        gap="0"
        colorScheme="orange"
      >
        {createSafeSteps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0" ml="0.5rem">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription w="15rem" mb="1rem">
                <Text mb="1rem">{step.description}</Text>
                {index === 1 && (
                  <Stack direction="row" spacing="1rem">
                    <Flex>
                      <Button
                        colorScheme="orange"
                        size="xs"
                        onClick={onApproval}
                        isLoading={submittingApproval}
                        isDisabled={disableApprovalButton}
                      >
                        Approve {assetClass.collateralTypeName}
                      </Button>
                    </Flex>
                  </Stack>
                )}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Button
        colorScheme="orange"
        onClick={onCreateSafe}
        mt="1rem"
        isDisabled={disableCreateButton}
      >
        Create Safe
      </Button>
    </Stack>
  );
};

export default CreateSafeStepsCard;
