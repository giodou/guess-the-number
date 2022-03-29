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
        padding: 20,
        marginVertical: 20
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
    }
})