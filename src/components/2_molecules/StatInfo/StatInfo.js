import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

const StatInfo = ({
  label,
  value,
  valueSize = "2xl",
  helper,
  helperSize = "md",
  priceIncreateType,
  withArrow,
}) => {
  return (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber fontSize={valueSize}>{value}</StatNumber>
      <StatHelpText fontSize={helperSize}>
        {withArrow && (
          <StatArrow
            type={priceIncreateType === "+" ? "increase" : "decrease"}
          />
        )}
        {helper}
      </StatHelpText>
    </Stat>
  );
};

export default StatInfo;
