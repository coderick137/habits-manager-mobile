import { View, Text, ScrollView } from 'react-native';

import { Header } from '../components/Header';
import { DAY_SIZE, HabitDay } from '../components/HabitDay';

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">

      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((day, i) => (
            <Text
              key={`${day}-${i}`}
              className="text-zinc-300 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {day}
            </Text>
          ))
        }
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {
            datesFromYearStart.map(date => (
              <HabitDay
              key={date.toISOString()}
              />
            ))
          }
        </View>
        {
          amountOfDaysToFill > 0 && Array
          .from({ length: amountOfDaysToFill })
          .map((_, index) => (
            <View 
              key={index}
              className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
              style={{ width: DAY_SIZE, height: DAY_SIZE }}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}