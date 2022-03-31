import {
    View,
    ImageBackground,
    Text,
    SafeAreaView
}
    from 'react-native'

import { style } from './styles';

import { ScreenTitle } from '../../components/ScreenTitle';
import { Background } from '../../components/Background';
import { GameOptionButtom } from '../../components/GameOptionButtom';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SCREENS } from '../../routes';

import ImageBackgroud from '../../assets/images/done.png';
import { theme } from '../../global/theme';

export function GameOver() {

    const route = useRoute();

    const { gameInfo } = route.params ? route.params : {};

    const navigation = useNavigation();

    function handleStartNewGame() {
        navigation.navigate(SCREENS.StartGame);
    }

    return (
        <Background>
            <SafeAreaView style={style.container}>
                <ScreenTitle title={"GAME OVER!"} />

                <ImageBackground
                    source={ImageBackgroud}
                    resizeMode="cover"
                    style={style.image}
                    imageStyle={{ borderRadius: 150, borderWidth: 2, borderColor: theme.colors.boardBackground }}
                >
                </ImageBackground>

                <View style={style.resultWrapper}>
                    <Text style={style.normalText}>
                        Your phone needed
                    </Text>
                    <Text style={style.resultText}>
                        {gameInfo ? gameInfo.numberOfTrys : 0}
                    </Text>
                    <Text style={style.normalText}>
                        rounds to guess the number
                    </Text>
                    <Text style={style.resultText}>
                        {gameInfo ? gameInfo.pickedNumber : 0}
                    </Text>
                    <Text style={style.normalText}>
                        .
                    </Text>
                </View>

                <View style={style.buttonContainer}>
                    <GameOptionButtom
                        title={"Start New Game"}
                        onPress={handleStartNewGame}
                    />
                </View>

            </SafeAreaView>
        </Background>
    );
}


