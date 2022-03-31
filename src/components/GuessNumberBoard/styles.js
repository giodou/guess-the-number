import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginHorizontal: 30,
        backgroundColor: theme.colors.boardBackground,
        borderRadius: 7,
        padding: 15,

        //shadow for android only
        elevation: 10,

        //next props, is only for control ios shadow
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 1

    },
    title: {
        color: theme.colors.boardTitle,
        fontSize: 22,
        fontFamily: theme.fonts.boardTitle
    }
})