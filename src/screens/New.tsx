import { useState } from 'react';

import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import colors from 'tailwindcss/colors';

const availableWeekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleTodddleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => weekDays.filter(day => day !== weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton/>
        
        <Text className="text-3xl font-extrabold mt-6 text-white">
          Novo hábito
        </Text>

        <Text className="text-base font-semibold mt-6 text-white">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-4 bg-zinc-800 text-white focus:border-2 focus:border-green-500"
          placeholder="Ex: Ler 30 minutos"
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="mt-4 mb-3 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>

        {
          availableWeekDays.map((day, index) => (
            <Checkbox
            key={day}
            title={day}
            checked={weekDays.includes(index)}
            onPress={() => handleTodddleWeekDay(index)}
            />
          ))
        }
        <TouchableOpacity
          activeOpacity={0.7}
          className="h-14 w-full bg-green-600 rounded-lg items-center justify-center flex-row mt-6 mb-6"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="text-white font-semibold text-base ml-2">
            Salvar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}