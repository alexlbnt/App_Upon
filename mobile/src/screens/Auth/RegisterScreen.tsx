import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export default function RegisterScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>
          Cadastre-se para salvar e usar cupons
        </Text>
      </View>

      {/* FORM */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={18} color="#6B7280" />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={18} color="#6B7280" />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color="#6B7280"
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.loginText}>
            Já tem conta? <Text style={styles.link}>Entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: "center",
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.text,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
  },

  form: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 14,
    height: 48,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: colors.text,
  },

  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
  },

  registerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  loginLink: {
    marginTop: 18,
    alignItems: "center",
  },

  loginText: {
    fontSize: 13,
    color: "#6B7280",
  },

  link: {
    color: colors.primary,
    fontWeight: "700",
  },
});
