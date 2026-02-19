import { useState, useMemo, useCallback, useEffect } from "react"
import { clean, format, validate } from "rut-cl"

export interface UseRutOptions {
    autoFormat?: boolean
}

export interface UseRutReturn {
    rawValue: string
    setRawValue: (value: string) => void
    cleanValue: string
    formattedValue: string
    isValid: boolean
    error: string | null
    reset: () => void
}

export function useRut(initialValue: string, props: UseRutOptions = {}): UseRutReturn {
    const { autoFormat = true } = props

    const [rawValue, setRawValue] = useState(initialValue)

    useEffect(() => {
        setRawValue(initialValue)
    }, [initialValue])

    const cleanValue = useMemo(() => {
        return clean(rawValue)
    }, [rawValue])

    const formattedValue = useMemo(() => {
        if (!cleanValue) return ""
        return autoFormat ? format(cleanValue) : rawValue
    }, [autoFormat, cleanValue, rawValue])

    const isValid = useMemo(() => {
        if (!cleanValue) return false
        return validate(cleanValue)
    }, [cleanValue])

    const error = useMemo(() => {
        if (!cleanValue) return null
        return isValid ? null : "Invalid RUT"
    }, [cleanValue, isValid])

    const reset = useCallback(() => {
        setRawValue("")
    }, [])

    return {
        rawValue,
        formattedValue,
        cleanValue,
        isValid,
        error,
        setRawValue,
        reset
    }
}
