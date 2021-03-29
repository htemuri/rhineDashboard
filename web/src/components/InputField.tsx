import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    placeholder: string;
}

export const InputField: React.FC<InputFieldProps> = ({label, size: _, ...props}) => {
    const [field, {error}] = useField(props);
    return (
        <FormControl isInvalid={!!error} mt={"10px"} w="450px">
            {/* <FormLabel htmlFor={field.name}>{label}</FormLabel> */}
            <Input {...field} {...props} id={field.name} placeholder={props.placeholder} bg="#0d0d0d" borderColor="#969696"/>
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}