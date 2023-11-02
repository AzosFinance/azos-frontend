import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const FormInput = ({
  register,
  name,
  label,
  disabled,
  helplerText,
  defaultValue = null,
  type = "text",
  placeholder = "",
  isRequired = false,
  error = false,
  errorMessage,
  inputAddon,
}) => {
  return (
    <FormControl id={name} isRequired={isRequired} isInvalid={error}>
      <FormLabel mb="0.7rem" fontSize="sm">
        {label}
      </FormLabel>
      <InputGroup>
        {inputAddon && <InputLeftAddon>{inputAddon}</InputLeftAddon>}
        <Input
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          disabled={disabled}
          {...register(name)}
        />
      </InputGroup>

      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {helplerText && <FormHelperText>{helplerText}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
