import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import EstablishmentCategoriesScreen from "../screens/EstablishmentCategoriesScreen";
import EstablishmentsByCategoryScreen from "../screens/EstablishmentsByCategoryScreen";
import EstablishmentScreen from "../screens/EstablishmentScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { colors } from "../theme/colors";

/* ------------------ TABS ------------------ */
const Tab = createBottomTabNavigator();

/* ------------------ STACK ----------------- */
const Stack = createNativeStackNavigator();

/* -------- BOTÃO CENTRAL (CARRINHO) -------- */
function CartButton({ children, onPress }: any) {
  return (
    <TouchableOpacity style={styles.cartButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

/* --------- BOTTOM TAB --------------------- */
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeTab"
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
        name="FavoritesTab"
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
        name="CartTab"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CartButton {...props} />,
          tabBarIcon: () => (
            <Ionicons name="cart" size={28} color="#fff" />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileTab"
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
      <Stack.Screen name="Tabs" component={BottomTabs} />

      {/* Fluxo interno */}
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
    </Stack.Navigator>
  );
}

/* ----------------- STYLES ----------------- */
const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    backgroundColor: "#fff",
    borderTopWidth: 0,
    elevation: 10,
  },

  cartButton: {
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
