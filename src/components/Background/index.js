import React from "react";
import {
    ImageBackground
} from 'react-native'

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";

import ImageBackgroud from '../../assets/images/backgroundImg.png';

export function Background(props) {
    const { backgroundGradientInitial, backgroundGradientFinal } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[backgroundGradientInitial, backgroundGradientFinal]}
        >
            <ImageBackground
                source={ImageBackgroud}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{opacity: 0.1}}
            >
                {props.children}
            </ImageBackground>

        </LinearGradient>
    )
}