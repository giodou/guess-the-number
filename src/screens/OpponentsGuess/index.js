import { useState } from 'react';

import {
    View
}
    from 'react-native'

import { useRoute } from '@react-navigation/native';

import { style } from './styles';

import { ScreenTitle } from '../../components/ScreenTitle';
import { GuessNumberBoard } from '../../components/GuessNumberBoard';
import { Background } from '../../components/Background';
import { GameOptionButtom } from '../../components/GameOptionButtom';
import { ScreenPickedNumber } from '../../components/ScreenPickedNumber';


export function OpponentsGuess() {
    const route = useRoute();
    const { pickedNumber } = route.params;

    const [oponnentPickedNumber, setOponnentPickedNumber] = useState();

    function handleOptionLower() {

    }

    function handleOptionHigher() {

    }

    function handleOpponentPickNumber(){
        
    }

    return (
        <Background>
            <View style={style.container}>
                <ScreenTitle title={"Opponent's Guess"} />

                <ScreenPickedNumber
                    pickerNumber={pickedNumber}
                />

                <GuessNumberBoard title={"Higher or Lower?"}>
                    <View style={style.buttonsContainer}>
                        <GameOptionButtom
                            title={"-"}
                            onPress={handleOptionLower}
                        />
                        <GameOptionButtom
                            title={"+"}
                            onPress={handleOptionHigher}
                        />
                    </View>
                </GuessNumberBoard>
            </View>
        </Background>
    );
}


