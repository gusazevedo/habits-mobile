import {daySize, week} from "../utils/constants";
import {Text, View} from "react-native";
import {generateYearDays} from "../utils/functions";

export function WeekDaysView() {
    return (
        <View className='flex-row mt-6 mb-2'>
            {week.map((day, index) => (
                <Text
                    key={index}
                    className='text-zinc-500 text-xl font-bold text-center mx-1'
                    style={{width: daySize}}
                >
                    {day}
                </Text>
            ))}
        </View>
    );
}