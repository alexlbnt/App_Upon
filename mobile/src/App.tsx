import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { colors } from "./theme/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <BottomTabNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
