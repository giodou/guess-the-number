import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        width: '98%',
        height: 50,
        marginVertical: 8,
        backgroundColor: theme.colors.backgroundGradientFinal,
        borderRadius: 25,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: theme.colors.guessOptionButtomBorder
    },
    pressablePartButtom:{
        width: '100%',
        height: '100%'
    },
    guessOptionTextWrapper:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'stretch',
        alignItems: 'center',
        justifyContent: "center"
    },
    guessTryText: {
        textAlign: 'left',
        color: theme.colors.backgroundGradientInitial,
        fontSize: 15,
        fontFamily: theme.fonts.optionButtomText,
        marginLeft: 0,
        width: 30,
        marginLeft: 30,
        width: 100,
    },
    guessOptionText: {
        color: theme.colors.backgroundGradientInitial,
        fontSize: 15,
        fontFamily: theme.fonts.optionButtomText,
        width: 150,
        width: '65%',
        textAlign: 'right',
        marginRight: 35
    }
})