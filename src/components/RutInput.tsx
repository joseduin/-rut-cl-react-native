import React, { useCallback } from "react"
import { TextInput, TextInputProps } from "react-native"
import { clean, format, validate } from "rut-cl";

export interface OnChangeRutParams {
    raw: string;
    clean: string;
    formatted: string;
    isValid: boolean;
}

export interface RutInputProps extends TextInputProps {
    value: string
    onChangeText?: (value: string) => void
    onChangeRut?: (data: OnChangeRutParams) => void
}

export default React.forwardRef<TextInput, RutInputProps>((props, ref) => {
    const {
        value,
        onChangeText,
        onChangeRut,

        ...rest
    } = props

    const handleChange = useCallback((input: string) => {
        const cleaned = clean(input, { strict: true })
        const formatted = format(input)
        const valid = validate(formatted)

        onChangeText?.(formatted)

        onChangeRut?.({
            raw: input,
            clean: cleaned,
            formatted: formatted,
            isValid: valid
        })
    }, [onChangeText, onChangeRut])

    return (
        <TextInput
            {...rest}
            value={value}
            onChangeText={handleChange}
            ref={ref}
        />
    )
});
