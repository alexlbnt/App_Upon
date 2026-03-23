import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import EstablishmentCategoriesScreen from "../screens/EstablishmentCategoriesScreen";
import EstablishmentsByCategoryScreen from "../screens/EstablishmentsByCategoryScreen";
import EstablishmentScreen from "../screens/EstablishmentScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import WalletScreen from "../screens/WalletScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CouponDetailsScreen from "../screens/CouponDetailsScreen";

import { colors } from "../theme/colors";

/* ------------------ TABS ------------------ */
const Tab = createBottomTabNavigator();

/* ------------------ STACK ----------------- */
const Stack = createNativeStackNavigator();

/* -------- BOTÃO CENTRAL (CARTEIRA) -------- */
function WalletButton({ children, onPress }: any) {
  return (
    <TouchableOpacity style={styles.walletButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

/* --------- BOTTOM TABS -------------------- */
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? colors.primary : "#9CA3AF"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart"
              size={24}
              color={focused ? colors.primary : "#9CA3AF"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarButton: (props) => <WalletButton {...props} />,
          tabBarIcon: () => (
            <Ionicons name="wallet" size={28} color="#fff" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? colors.primary : "#9CA3AF"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* -------- STACK PRINCIPAL DO APP ---------- */
export default function BottomTabNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tabs */}
      <Stack.Screen name="Tabs" component={Tabs} />

      {/* Fluxos internos */}
      <Stack.Screen
        name="EstablishmentCategories"
        component={EstablishmentCategoriesScreen}
      />

      <Stack.Screen
        name="EstablishmentsByCategory"
        component={EstablishmentsByCategoryScreen}
      />

      <Stack.Screen
        name="Establishment"
        component={EstablishmentScreen}
      />

      <Stack.Screen
        name="CouponDetails"
        component={CouponDetailsScreen}
      />
      
    </Stack.Navigator>
  );
}

/* ----------------- STYLES ----------------- */
const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    borderTopWidth: 0,
    elevation: 10,
  },

  walletButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
    elevation: 5,
  },
});
