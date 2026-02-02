import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function ProfileScreen() {
  function handleLogout() {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da sua conta?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", style: "destructive", onPress: () => {} },
      ]
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER PERFIL */}
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>João Alberto</Text>
          <Text style={styles.email}>joao@email.com</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEÇÃO CONTA */}
      <Text style={styles.sectionTitle}>Conta</Text>

      <ProfileItem
        icon="person-outline"
        label="Meus dados"
      />
      <ProfileItem
        icon="location-outline"
        label="Endereços"
      />
      <ProfileItem
        icon="heart-outline"
        label="Favoritos"
      />
      <ProfileItem
        icon="time-outline"
        label="Histórico"
      />

      {/* SEÇÃO CONFIGURAÇÕES */}
      <Text style={styles.sectionTitle}>Configurações</Text>

      <ProfileItem
        icon="notifications-outline"
        label="Notificações"
      />
      <ProfileItem
        icon="card-outline"
        label="Formas de pagamento"
      />
      <ProfileItem
        icon="help-circle-outline"
        label="Ajuda"
      />
      <ProfileItem
        icon="information-circle-outline"
        label="Sobre o app"
      />

      {/* SAIR */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={18} color="#DC2626" />
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ================= COMPONENT ================= */

function ProfileItem({
  icon,
  label,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color={colors.primary} />
        <Text style={styles.itemText}>{label}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E5E7EB",
  },

  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  email: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },

  editButton: {
    marginTop: 8,
    alignSelf: "flex-start",
  },

  editButtonText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 10,
    marginTop: 20,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  itemText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
  },

  logoutButton: {
    marginTop: 30,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 14,
    fontWeight: "600",
  },
});
