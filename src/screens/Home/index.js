import {
    View,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();

    function handleStartGame() {
        navigation.navigate('StartGame');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title='Start game'
                onPress={handleStartGame}
            />
        </View>
    );
}

export default Home;