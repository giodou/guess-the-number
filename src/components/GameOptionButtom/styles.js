import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        height: 45,
        marginVertical: 20,
        backgroundColor: theme.colors.optionButtom,
        borderRadius: 20,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    pressablePartButtom:{
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        backgroundColor: theme.colors.optionButtomBorder
    },
    title: {
        color: theme.colors.screenTitle,
        fontSize: 15,
        fontFamily: theme.fonts.optionButtomText
    }
})