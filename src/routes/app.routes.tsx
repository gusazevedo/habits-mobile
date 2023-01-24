import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home/Home';
import {Habit} from '../screens/Habit/Habit';
import {NewHabit} from '../screens/NewHabit/NewHabit';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>

            <Screen name="habit" component={Habit}/>

            <Screen name="new" component={NewHabit}/>
        </Navigator>
    );
}