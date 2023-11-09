import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

const StatInfo = ({
  label,
  value,
  valueSize = "2xl",
  helper,
  helperSize = "md",
  textAlign = "center",
  labelSize = "sm",
  labelColor = "gray.400",
  valueColor = "gray.50",
}) => {
  return (
    <Stat textAlign={textAlign}>
      <StatLabel color={labelColor} fontSize={labelSize}>
        {label}
      </StatLabel>
      <StatNumber mt="0.3rem" color={valueColor} fontSize={valueSize}>
        {value}
      </StatNumber>
      <StatHelpText mt="0.3rem" color="gray.400" fontSize={helperSize}>
        {helper}
      </StatHelpText>
    </Stat>
  );
};

export default StatInfo;
