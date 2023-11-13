import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
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
  size = "md",
}) => {
  return (
    <FormControl id={name} isRequired={isRequired} isInvalid={error}>
      <FormLabel mb="0.7rem" fontSize="sm">
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          borderColor="gray.500"
          size={size}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          disabled={disabled}
          {...register(name)}
        />
        {inputAddon && <InputRightAddon>{inputAddon}</InputRightAddon>}
      </InputGroup>

      {error && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      {helplerText && <FormHelperText>{helplerText}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
