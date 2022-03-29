import {
    Pressable,
    Text
} from 'react-native'

import { style } from './styles';
import { RectButton } from 'react-native-gesture-handler'

/**
 * props:
 * - pickerNumber
 */
export function ScreenPickedNumber(props) {
    return (
        <RectButton style={style.container}>
            <Pressable style={style.pressable}>
                <Text style={style.title}>
                    {props.pickerNumber}
                </Text>
            </Pressable>
        </RectButton>
    );
}

