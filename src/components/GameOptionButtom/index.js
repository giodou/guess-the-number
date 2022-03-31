import {
    Pressable,
    Text,
    View
} from 'react-native'

import { style } from './styles';
import { RectButton } from 'react-native-gesture-handler'

/**
 * props:
 * - title:string
 * - onPress:calback function
 */
export function GameOptionButtom(props) {
    return (
        <View style={style.container} >
            <Pressable
                style={({ pressed }) => pressed ? [style.pressablePartButtom, style.pressed] : style.pressablePartButtom}
                onPress={props.onPress}
            >
                <Text style={style.title}>
                    {props.title}
                </Text>
            </Pressable>
        </View>

    );
}
