import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorMode,
} from "@chakra-ui/react";

const StatInfo = ({
  label,
  value,
  valueSize = "2xl",
  helper,
  helperSize = "md",
  textAlign = "center",
  labelSize = "sm",
}) => {
  const { colorMode } = useColorMode();
  return (
    <Stat textAlign={textAlign}>
      <StatLabel fontSize={labelSize}>{label}</StatLabel>
      <StatNumber mt="0.3rem" fontSize={valueSize}>
        {value}
      </StatNumber>
      <StatHelpText
        mt="0.3rem"
        color={colorMode === "light" ? "gray.900" : "gray.400"}
        fontSize={helperSize}
      >
        {helper}
      </StatHelpText>
    </Stat>
  );
};

export default StatInfo;
