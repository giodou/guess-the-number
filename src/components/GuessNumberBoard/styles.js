import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginHorizontal: 30,
        backgroundColor: theme.colors.boardBackground,
        borderRadius: 7,
        padding: 15,
    },
    title: {
        color: theme.colors.boardTitle,
        fontSize: 22,
        fontFamily: theme.fonts.boardTitle
    }
})