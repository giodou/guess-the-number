import {
    StyleSheet
}
from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        width: 300,
        marginHorizontal: 30,
        marginVertical: 30,
    },
    pressable:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        height: 56,
        borderRadius: 2,
        borderColor: theme.colors.screenTitle,
        borderWidth: 2,
    },
    title: {
        fontSize: 22,
        fontFamily: theme.fonts.screenTitle,
        color: theme.colors.screenTitle
    }
})