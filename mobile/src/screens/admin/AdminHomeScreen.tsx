import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme/colors";

export default function AdminHomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Área do Lojista</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="storefront" size={28} color={colors.primary} />
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Minhas Lojas</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="ticket" size={28} color="#8B5CF6" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Cupons Ativos</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Gerenciar Negócios</Text>

      <AdminActionCard 
        title="Meus Estabelecimentos"
        description="Cadastre as informações, localização e logo da sua loja."
        icon="business-outline"
        color={colors.primary}
        onPress={() => navigation.navigate("AdminEstablishments")}
      />

      <AdminActionCard 
        title="Gerenciar Cupons"
        description="Crie novas ofertas ou suspenda ofertas antigas."
        icon="pricetags-outline"
        color="#8B5CF6"
        onPress={() => navigation.navigate("AdminCoupons")}
      />

      <AdminActionCard 
        title="Validar Descontos (Cliente)"
        description="Leia o QRCode ou digite o código do cliente no caixa para conceder o desconto."
        icon="scan-outline"
        color="#10B981"
        onPress={() => navigation.navigate("AdminValidate")}
      />
    </ScrollView>
  );
}

function AdminActionCard({ title, description, icon, color, onPress }: any) {
  return (
    <TouchableOpacity style={styles.actionCard} onPress={onPress}>
      <View style={[styles.iconWrapper, { backgroundColor: color + "15" }]}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: colors.muted,
    lineHeight: 18,
  },
});
