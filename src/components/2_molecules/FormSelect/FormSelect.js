import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

const FormSelect = ({
  register,
  name,
  label,
  options,
  disabled,
  helplerText,
  defaultValue = null,
  type = "text",
  placeholder,
  isRequired = false,
}) => {
  return (
    <FormControl id={name} isRequired={isRequired}>
      <FormLabel mb="0.7rem" fontSize="sm">
        {label}
      </FormLabel>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
        // size={size}
        {...register(name)}
      >
        {options?.map((e, idx) => (
          <option key={idx} value={e.value}>
            {e.label}
          </option>
        ))}
      </Select>
      {helplerText && <FormHelperText>{helplerText}</FormHelperText>}
    </FormControl>
  );
};

export default FormSelect;
