import { useCallback } from 'react'
import { format, validate, parse } from 'rut-cl'

export function useRutFormatter() {
    const formatRut = useCallback((value: string) => {
        return format(value)
    }, [format])

    const validateRut = useCallback((value: string) => {
        return validate(value)
    }, [])

    const getVerifier = useCallback((value: string) => {
        return parse(value).verifier
    }, [])

    return {
        formatRut,
        validateRut,
        getVerifier,
    }
}
