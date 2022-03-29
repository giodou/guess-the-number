import {
    Pressable,
    Text
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
        <Pressable style={style.container} onPress={props.onPress}>
            <RectButton style={style.pressablePartButtom} >
                <Text style={style.title}>
                    {props.title}
                </Text>
            </RectButton>
        </Pressable >
    );
}
