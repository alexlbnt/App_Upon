import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { colors } from "../../theme/colors";
import { useAuth } from "../../contexts/AuthContext";

export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  function handleRegister() {
    // 🔥 Futuro: API de cadastro
    login(); // já entra logado após criar conta
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
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
          <Text style={styles.cardTitle}>Criar Conta</Text>
          <Text style={styles.cardSubtitle}>
            Cadastre-se para salvar cupons e aproveitar os melhores
            descontos perto de você
          </Text>

          {/* NOME */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={18}
              color="#6B7280"
            />
            <TextInput
              placeholder="Nome completo"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>

          {/* EMAIL */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={18}
              color="#6B7280"
            />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* SENHA */}
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

          {/* CONFIRMAR SENHA */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color="#6B7280"
            />
            <TextInput
              placeholder="Confirmar senha"
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              <Ionicons
                name={
                  showConfirmPassword ? "eye-off" : "eye"
                }
                size={18}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>

          {/* BOTÃO CADASTRAR */}
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.85}
            onPress={handleRegister}
          >
            <Text style={styles.registerText}>
              CRIAR CONTA
            </Text>
          </TouchableOpacity>

          {/* VOLTAR LOGIN */}
          <TouchableOpacity
            style={styles.backToLogin}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>
              Já possui conta?{" "}
              <Text style={styles.link}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 60,
    marginBottom: 30,
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

  registerButton: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 22,
  },

  registerText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  backToLogin: {
    marginTop: 18,
    alignItems: "center",
  },

  backText: {
    fontSize: 13,
    color: "#6B7280",
  },

  link: {
    color: colors.primary,
    fontWeight: "700",
  },
});
