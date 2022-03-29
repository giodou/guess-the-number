import {
    View,
    Text
} from 'react-native'

import { style } from './styles'

export function GuessNumberBoard(props) {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}