import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginBottom: 30,
        width: '90%',
    },
    pressable:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        height: 100,
        borderRadius: 5,
        borderColor: theme.colors.backgroundGradientFinal,
        borderWidth: 4,
    },
    title: {
        fontSize: 32,
        fontFamily: theme.fonts.screenTitle,
        color: theme.colors.backgroundGradientFinal
    }
})