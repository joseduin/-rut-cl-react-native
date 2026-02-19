import { useMemo } from "react"
import { TextProps } from "react-native"
import { format, parse } from "rut-cl"
import { RutDisplayProps } from "../types"

interface UseRutDisplayReturn extends TextProps {
    text: React.ReactNode
    isValid: boolean
}

export function useRutDisplay(props: RutDisplayProps): UseRutDisplayReturn {
    const {
        value,
        fallback = null,
        showInvalid = false,
        ...textProps
    } = props

    const result = useMemo(() => {
        if (!value) {
            return {
                text: fallback,
                isValid: false
            };
        }

        const parsedValue = parse(value)
        if (!parsedValue.isValid && !showInvalid) {
            return {
                text: fallback,
                isValid: false
            }
        }

        const formatted = format(value)
        return {
            text: formatted,
            isValid: parsedValue.isValid
        }
    }, [value, fallback, showInvalid])

    return {
        ...result,
        ...textProps,
    }
}