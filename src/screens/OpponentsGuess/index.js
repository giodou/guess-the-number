import { useState, useEffect } from 'react';

import {
    View,
    FlatList
}
    from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native';

import { style } from './styles';

import { ScreenTitle } from '../../components/ScreenTitle';
import { GuessNumberBoard } from '../../components/GuessNumberBoard';
import { Background } from '../../components/Background';
import { GameOptionButtom } from '../../components/GameOptionButtom';
import { ScreenPickedNumber } from '../../components/ScreenPickedNumber';
import { OpponentGuessOption } from '../../components/OpponentGuessOption';

import { SCREENS } from '../../routes';

export function OpponentsGuess() {
    const route = useRoute();
    const navigation = useNavigation();

    const { pickedNumber } = route.params;

    const [oponnentPickedNumbers, setOponnentPickedNumbers] = useState([]);
    const [currentInitialRangeGuessTip, setCurrentInitialRangeGuessTip] = useState('');
    const [currentFinalRangeGuessTip, setCurrentFinalRangeGuessTip] = useState('');

    function getRandomGuessBetweenRange(min, max) {
        console.log(min, max)
        return parseInt(Math.floor(Math.random() * (max - min)) + min);
    }

    function handleOpponentNewGuess() {
        const currentOpponentsGuess = [...oponnentPickedNumbers];

        setOponnentPickedNumbers([getNewOpponentGuess(), ...currentOpponentsGuess]);
        checkGameOver();
    }

    function getNewOpponentGuess() {
        const totalOpponentsGuess = oponnentPickedNumbers ? oponnentPickedNumbers.length + 1 : 1;

        const newGuess = {
            guess: getRandomGuessBetweenRange(currentInitialRangeGuessTip, currentFinalRangeGuessTip),
            try: totalOpponentsGuess
        };

        return newGuess;
    }

    function handleTipForWrongGuess(isLower) {
        console.log(isLower);

        if (isLower) {
            setCurrentFinalRangeGuessTip(oponnentPickedNumbers[0] ? oponnentPickedNumbers[0].guess - 1 : 99);
        } else {
            setCurrentInitialRangeGuessTip(oponnentPickedNumbers[0] ? oponnentPickedNumbers[0].guess + 1 : 1);
        }

        setTimeout(function () {
            handleOpponentNewGuess();
        }, 150)

    }

    function handleGameOver() {
        navigation.navigate(SCREENS.GameOver, { gameInfo: { numberOfTrys: oponnentPickedNumbers.length, pickedNumber } });
    }

    function checkGameOver() {
        if (oponnentPickedNumbers.length > 0 && oponnentPickedNumbers[0].guess === parseInt(pickedNumber)) {
            handleGameOver();
        }
    }

    useEffect(() => {
        setCurrentInitialRangeGuessTip(1);
        setCurrentFinalRangeGuessTip(99);

        setTimeout(function () {
            handleOpponentNewGuess();
        }, 150)

    }, [])

    return (
        <Background>
            <View style={style.container}>
                <ScreenTitle title={"Opponent's Guess"} />

                <ScreenPickedNumber
                    pickerNumber={oponnentPickedNumbers[0] ? oponnentPickedNumbers[0].guess : ''}
                />

                <GuessNumberBoard title={"Higher or Lower?"}>
                    <View style={style.buttonsContainer}>
                        <GameOptionButtom
                            title={"-"}
                            onPress={() => handleTipForWrongGuess(true)}
                        />
                        <GameOptionButtom
                            title={"+"}
                            onPress={() => handleTipForWrongGuess(false)}
                        />
                    </View>
                </GuessNumberBoard>

                <FlatList
                    style={style.guessList}
                    data={oponnentPickedNumbers}
                    keyExtractor={item => item.try}
                    renderItem={({ item }) => (
                        <OpponentGuessOption
                            guessTry={item.try}
                            guess={item.guess}
                        />
                    )}
                />

            </View>
        </Background>
    );
}


