import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { CartProvider } from "./contexts/CartContext";
import { colors } from "./theme/colors";

export default function App() {
  return (
    <CartProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor={colors.background} />
        <BottomTabNavigator />
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
