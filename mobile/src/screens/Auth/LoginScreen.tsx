import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { colors } from "../../theme/colors";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [keepConnected, setKeepConnected] = useState(true);

  function handleLogin() {
    login();
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* TOPO / LOGO */}
      <View style={styles.top}>
        <Text style={styles.logo}>
          <Text style={styles.logoPrimary}>Up</Text>
          <Text style={styles.logoSecondary}>on</Text>
        </Text>
        <Text style={styles.logoSubtitle}>App de Cupons</Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bem-Vindo!</Text>
        <Text style={styles.cardSubtitle}>
          Entre e favorite seus mercados favoritos para ficar por
          dentro dos melhores descontos!
        </Text>

        {/* INPUT USUÁRIO */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={18} color="#6B7280" />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* INPUT SENHA */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color="#6B7280"
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={18}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* OPÇÕES */}
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.keepConnected}
            onPress={() => setKeepConnected(!keepConnected)}
          >
            <Ionicons
              name={
                keepConnected
                  ? "checkbox"
                  : "square-outline"
              }
              size={18}
              color={colors.primary}
            />
            <Text style={styles.keepText}>Manter Conectado</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>
              Esqueceu a Senha?
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTÃO ENTRAR */}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.85}
          onPress={login}
        >
          <Text style={styles.loginText}>ENTRAR</Text>
        </TouchableOpacity>

        {/* CRIAR CONTA */}
        <Text style={styles.noAccount}>
          Não Possui Uma Conta?
        </Text>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.createAccountText}>
            CRIAR UMA CONTA
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F3A4A",
    paddingHorizontal: 20,
  },

  top: {
    alignItems: "center",
    marginTop: 70,
    marginBottom: 40,
  },

  logo: {
    fontSize: 42,
    fontWeight: "800",
  },

  logoPrimary: {
    color: colors.primary,
  },

  logoSecondary: {
    color: "#E5E7EB",
  },

  logoSubtitle: {
    color: "#E5E7EB",
    marginTop: 4,
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1F2937",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 18,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    marginTop: 16,
    gap: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },

  keepConnected: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  keepText: {
    fontSize: 12,
    color: "#374151",
  },

  forgotText: {
    fontSize: 12,
    color: "#1F3A4A",
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
  },

  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  noAccount: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 13,
    color: "#6B7280",
  },

  createAccountButton: {
    borderWidth: 1.5,
    borderColor: "#1F3A4A",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
  },

  createAccountText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F3A4A",
  },
});
