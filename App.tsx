import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
      style="light"
      backgroundColor="transparent"
      translucent
      />
      <Text style={styles.text}>code_rick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090A",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "#fff",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
  }
});
