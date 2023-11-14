import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

const FromInputNumeric = ({
  onValueChange,
  control,
  name,
  placeholder = "Input Amount",
  disabled,
  label,
  subLabel,
  subLabelColor,
  isRequired = false,
  error = false,
  errorMessage,
  helplerText,
  size = "md",
}) => {
  const formControlProps = {
    placeholder,
    disabled,
    size,
    borderColor: "gray.600",
    placeholder,
  };
  return (
    <FormControl id={name} isRequired={isRequired} isInvalid={error}>
      <Stack direction="row">
        <FormLabel mb="1rem" fontSize="sm">
          {label}
        </FormLabel>
        {subLabel && (
          <Text fontSize="xs" color={subLabelColor}>
            {subLabel}
          </Text>
        )}
      </Stack>
      <Controller
        name={name}
        control={control}
        render={(props) => {
          return (
            <NumericFormat
              thousandSeparator
              onValueChange={onValueChange}
              onBlur={props.onBlur}
              customInput={Input}
              {...formControlProps}
            />
          );
        }}
      />
      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {helplerText && <FormHelperText>{helplerText}</FormHelperText>}
    </FormControl>
  );
};

export default FromInputNumeric;
