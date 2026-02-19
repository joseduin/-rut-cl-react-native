import React from "react"
import { Text } from "react-native"
import { RutDisplayProps } from "../types"
import { useRutDisplay } from "../hooks/useRutDisplay"

export default React.forwardRef<Text, RutDisplayProps>((props, ref) => {
    const { text, ...textProps } = useRutDisplay(props)

    return <Text {...textProps} ref={ref}>{text}</Text>
})
