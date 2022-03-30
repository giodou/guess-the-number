import {
    StyleSheet
}
from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    buttonsContainer:{
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    guessList: {
        width: '100%',
        marginTop: 20
    }
})