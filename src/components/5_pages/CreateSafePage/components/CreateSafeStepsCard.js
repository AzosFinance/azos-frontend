import {
  Box,
  Button,
  Flex,
  Stack,
  Step,
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
import { convertToEthValueType, createSafeSteps } from "@/utils/consts";
import { handleCreateSafe } from "@/web3/contractInteractions/haiProxyContract";
import { convertToEth, convertToWei, formatNumber } from "@/utils/funcs";
import { BASIC_ACTIONS_MOCKUP } from "@/web3/addresses";
import { useRouter } from "next/router";
import useCreateSafeAllowanceCheck from "@/hooks/utils/useCreateSafeAllowanceCheck";
import { useEffect, useMemo } from "react";

const CreateSafeStepsCard = ({
  assetClass,
  disableCreateButton,
  disableApprovalButton,
  loading,
  endodedDataFunction,
  proxy,
  collateralAsset,
  amountToExchange,
  isUserBalanceZero,
  userBalance,
}) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: createSafeSteps.length,
  });

  // CREATE SAFE
  const {
    onContractCall: onContractCallCreateSafe,
    isSubmitting: isSubmittingCreateSafe,
  } = useContractInteraction(handleCreateSafe(proxy), "Deposit Completed", [
    BASIC_ACTIONS_MOCKUP,
    endodedDataFunction,
  ]);

  // USER ALLOWANCE CHECK
  const {
    allowanceCheck,
    dataUserAllowance,
    isLoadingUserAllowance,
    address,
    refetch,
    balanceToDepositCorrect,
  } = useCreateSafeAllowanceCheck(
    collateralAsset,
    proxy,
    amountToExchange,
    userBalance,
    isUserBalanceZero
  );

  // HANDLE APPROVAL
  const { handleApproval, submittingApproval } =
    useGetErc20BalanceAllowance(collateralAsset);

  useEffect(() => {
    if (!amountToExchange) {
      setActiveStep(0);
    } else {
      if (allowanceCheck) {
        setActiveStep(3);
      } else {
        setActiveStep(1);
      }
    }
  }, [allowanceCheck, amountToExchange]);

  return (
    <Stack
      px="3rem"
      py="2rem"
      rounded="md"
      border="1px"
      borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
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
              <StepTitle color="orange.200">{step.title}</StepTitle>
              <Stack w="15rem" mb="1rem">
                <Text mb="1rem" fontSize="sm">
                  {step.description}
                </Text>
                {index === 1 && (
                  <Stack mb="1rem">
                    <Text fontSize="sm">
                      Current Allowance:{" "}
                      {formatNumber(
                        convertToEth(
                          convertToEthValueType.notReward,
                          dataUserAllowance
                        )
                      )}{" "}
                      {assetClass?.collateralTypeName}
                    </Text>
                    {allowanceCheck}
                    <Flex>
                      <Button
                        colorScheme="orange"
                        size="xs"
                        onClick={async () => {
                          const res = await handleApproval(
                            proxy,
                            convertToWei(amountToExchange?.toString())
                          );
                          if (res) {
                            refetch();
                          }
                        }}
                        isLoading={
                          submittingApproval ||
                          loading ||
                          isLoadingUserAllowance
                        }
                        isDisabled={
                          disableApprovalButton ||
                          allowanceCheck ||
                          !amountToExchange ||
                          !balanceToDepositCorrect
                        }
                        variant={
                          allowanceCheck || !balanceToDepositCorrect
                            ? "outline"
                            : "solid"
                        }
                      >
                        {!allowanceCheck
                          ? !balanceToDepositCorrect
                            ? "Not Enough Balance"
                            : `Approve ${assetClass.collateralTypeName}`
                          : "Approval Is Already Enough"}
                      </Button>
                    </Flex>
                  </Stack>
                )}
              </Stack>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Button
        colorScheme="orange"
        mt="1rem"
        isDisabled={
          disableCreateButton || !balanceToDepositCorrect || !amountToExchange
        }
        isLoading={submittingApproval || loading || isSubmittingCreateSafe}
        onClick={async () => {
          const res = await onContractCallCreateSafe();
          if (res) {
            router.push("/user/" + address?.toLowerCase());
          }
        }}
      >
        {!balanceToDepositCorrect
          ? `Low ${assetClass.collateralTypeName} Balance`
          : "Create Safe"}
      </Button>
    </Stack>
  );
};

export default CreateSafeStepsCard;
