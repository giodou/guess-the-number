import {
    Pressable,
    Text
} from 'react-native'

import { style } from './styles';
import { RectButton } from 'react-native-gesture-handler'

/**
 * props:
 * - title
 */
export function ScreenTitle(props) {
    return (
        <RectButton style={style.container}>
            <Pressable style={style.pressable}>
                <Text style={style.title}>
                    {props.title}
                </Text>
            </Pressable>
        </RectButton>
    );
}

