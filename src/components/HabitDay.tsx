import {TouchableOpacity, View, ScrollView} from "react-native";
import * as Haptics from 'expo-haptics';
import {daySize} from "../utils/constants";
import {generateYearDays} from "../utils/functions";

const daysOfYear = generateYearDays();
const minimumDaysAmount = 18 * 4;
const amountDaysToFIll = minimumDaysAmount - daysOfYear.length

export function HabitDay() {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
        >
            <View className='flex-row flex-wrap'>
                {daysOfYear.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        className='bg-zinc-900 rounded-lg border border-2 m-1 border-zinc-800'
                        style={{width: daySize, height: daySize}}
                        activeOpacity={0.7}
                        onPressIn={() => Haptics.notificationAsync(
                            Haptics.NotificationFeedbackType.Success
                        )}
                    />
                ))}
                {amountDaysToFIll > 0 && Array
                    .from({length: amountDaysToFIll})
                    .map((day, index) => (
                        <TouchableOpacity
                            key={index}
                            className='bg-zinc-900 rounded-lg border border-2 m-1 border-zinc-800 opacity-40'
                            style={{width: daySize, height: daySize}}
                            activeOpacity={0.7}
                        />
                    ))
                }
            </View>
        </ScrollView>
    );
}
