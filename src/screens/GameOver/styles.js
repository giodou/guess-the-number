import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    image: {
        height: 300,
        width: 300
    },
    resultWrapper: {
        marginTop: 20,
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    normalText: {
        fontSize: 25,
        fontFamily: theme.fonts.optionButtomText
    },
    resultText: {
        marginHorizontal: 5,
        fontSize: 25,
        color: theme.colors.optionButtom,
        fontFamily: theme.fonts.screenTitle
    },
    buttonContainer:{
        flex: 1,
        width: 160
    }
})