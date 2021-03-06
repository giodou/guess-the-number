import {
    StyleSheet
}
from 'react-native'
import { theme } from '../../global/theme'

export const style = StyleSheet.create({
    container: {
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer:{
        flex: 1
    }
})