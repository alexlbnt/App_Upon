import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
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

/* --------- BOTTOM TAB (HOME) -------------- */
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
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CartButton {...props} />,
          tabBarIcon: () => (
            <Ionicons name="cart" size={28} color="#fff" />
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

/* -------- NAVIGATOR PRINCIPAL ------------- */
export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Bottom Tabs */}
        <Stack.Screen name="Tabs" component={Tabs} />

        {/* Categorias de Estabelecimentos */}
        <Stack.Screen
          name="EstablishmentCategories"
          component={EstablishmentCategoriesScreen}
        />

        {/* Estabelecimentos por Categoria */}
        <Stack.Screen
          name="EstablishmentsByCategory"
          component={EstablishmentsByCategoryScreen}
        />

        {/* Detalhe do Estabelecimento */}
        <Stack.Screen
          name="Establishment"
          component={EstablishmentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
