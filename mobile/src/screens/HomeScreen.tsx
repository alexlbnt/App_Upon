import { ScrollView } from "react-native";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import PromoCard from "../components/PromoCard";
import CategoryList from "../components/CategoryList";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <SearchInput />
      <PromoCard />
      <CategoryList />
    </ScrollView>
  );
}
