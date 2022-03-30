import {
    Pressable,
    Text,
    View
} from 'react-native'

import { style } from './styles';
import { RectButton } from 'react-native-gesture-handler'

/**
 * props:
 * - guessTry:string
 * - guess:string
 */
export function OpponentGuessOption(props) {
    return (
        <Pressable style={style.container}>
            <RectButton style={style.pressablePartButtom} >
                <View style={style.guessOptionTextWrapper}>
                    <Text style={style.guessTryText}>
                        #{props.guessTry}
                    </Text>
                    <Text style={style.guessOptionText}>
                        Opponent's Guess: {props.guess}
                    </Text>
                </View>
            </RectButton>
        </Pressable >
    );
}
