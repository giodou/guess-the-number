import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        width: 150,
        height: 40,
        marginVertical: 20,
        backgroundColor: theme.colors.optionButtom,
        borderRadius: 20,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: theme.colors.optionButtomBorder
    },
    pressablePartButtom:{
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: theme.colors.screenTitle,
        fontSize: 15,
        fontFamily: theme.fonts.optionButtomText
    }
})