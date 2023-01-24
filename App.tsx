import {StatusBar} from 'react-native';
import './src/lib/dayjs';
import {Loading} from './src/components/Loading';
import {Routes} from './src/routes';

import {
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    useFonts,
} from '@expo-google-fonts/inter';

export default function App() {
    const [fontsLoader] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
    });

    if (!fontsLoader) {
        return (
            <Loading/>
        );
    }

    return (
        <>
            <Routes/>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
        </>
    );
}
