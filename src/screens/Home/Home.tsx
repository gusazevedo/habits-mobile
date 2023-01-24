import {View} from "react-native";
import {Header} from "../../components/Header";
import {HabitDay} from "../../components/HabitDay";
import {WeekDaysView} from "../../components/WeekDaysView";

export function Home() {
    return (
        <View className='flex-1 bg-black px-8 pt-24'>
            <Header/>
            <WeekDaysView/>
            <HabitDay/>
        </View>
    )
}
