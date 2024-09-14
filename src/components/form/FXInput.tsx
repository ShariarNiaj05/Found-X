const FXInput = () => {
  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
};

export default FXInput;
