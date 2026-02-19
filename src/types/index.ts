import { TextProps } from "react-native"

export interface RutDisplayProps extends TextProps {
    value: string
    fallback?: React.ReactNode
    showInvalid?: boolean
}