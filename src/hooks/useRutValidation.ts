import { useMemo } from "react"
import { parse } from "rut-cl"

interface UseRutValidationReturn {
    cleanValue: string
    isValid: boolean
    error: string | null
}

export function useRutValidation(value: string): UseRutValidationReturn {
    const parsedValue = useMemo(() => parse(value), [value])

    const error = useMemo(() => {
        if (parsedValue.isValid) return null
        return "Invalid RUT"
    }, [parsedValue])

    return {
        cleanValue: parsedValue.clean,
        isValid: parsedValue.isValid,
        error
    }
}
