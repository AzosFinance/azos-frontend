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
import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import useGetErc20BalanceAllowance from "@/hooks/web3Hooks/useGetErc20BalanceAllowance";
import { createSafeSteps } from "@/utils/consts";
import { handleCreateSafe } from "@/web3/contractInteractions/haiProxyContract";
import { convertToWei } from "@/utils/funcs";

const CreateSafeStepsCard = ({
  assetClass,
  disableCreateButton,
  disableApprovalButton,
  loading,
  endodedDataFunction,
  proxy,
  collateralAsset,
  amountToExchange,
}) => {
  const { colorMode } = useColorMode();
  const { activeStep } = useSteps({
    index: 0,
    count: createSafeSteps.length,
  });

  console.log(endodedDataFunction);

  // CREATE SAFE
  const {
    onContractCall: onContractCallCreateSafe,
    isSubmitting: isSubmittingCreateSafe,
    isConnected,
    isRightNetwork,
  } = useContractInteraction(handleCreateSafe(proxy), "Deposit Completed");

  // HANDLE APPROVAL
  const { handleApproval, submittingApproval } =
    useGetErc20BalanceAllowance(collateralAsset);

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
                        onClick={() => {
                          handleApproval(proxy, convertToWei(amountToExchange));
                        }}
                        isLoading={submittingApproval || loading}
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
        mt="1rem"
        isDisabled={disableCreateButton}
        isLoading={submittingApproval || loading}
      >
        Create Safe
      </Button>
    </Stack>
  );
};

export default CreateSafeStepsCard;
