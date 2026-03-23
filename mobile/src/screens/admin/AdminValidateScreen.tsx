import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme/colors";

export default function AdminValidateScreen() {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleValidate() {
    if (code.length < 6) return;
    
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      // Simulação de chamada para /coupons/validate
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setCode("");
      }, 1500);
    } catch (err) {
      setError("Código inválido ou cupom já utilizado.");
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Validar Cupom</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="qr-code-outline" size={64} color={colors.primary} />
        </View>
        <Text style={styles.description}>
          Digite o código de 6 dígitos gerado pelo aplicativo do seu cliente ou mire a câmera no QR Code dele para aprovar o desconto.
        </Text>

        {success ? (
          <View style={styles.successBox}>
            <Ionicons name="checkmark-circle" size={80} color="#10B981" />
            <Text style={styles.successTitle}>Cupom Aplicado!</Text>
            <Text style={styles.successText}>O desconto foi registrado e validado com sucesso.</Text>
            
            <TouchableOpacity 
              style={styles.nextButton}
              onPress={() => setSuccess(false)}
            >
              <Text style={styles.nextButtonText}>Validar Próximo Cliente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.formBox}>
            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : null}
            
            <Text style={styles.label}>Código de Autorização</Text>
            <TextInput
              style={styles.input}
              value={code}
              onChangeText={(txt) => setCode(txt.toUpperCase())}
              maxLength={6}
              placeholder="Ex: A9B2X7"
              placeholderTextColor="#D1D5DB"
              autoCapitalize="characters"
              autoCorrect={false}
            />
            
            <TouchableOpacity 
              style={[styles.validateButton, (loading || code.length < 6) && styles.validateButtonDisabled]}
              onPress={handleValidate}
              disabled={loading || code.length < 6}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.validateButtonText}>Validar Desconto</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera-outline" size={20} color={colors.primary} />
              <Text style={styles.cameraButtonText}>Escanear Leitor de QRCode</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: colors.muted,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  formBox: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  errorBox: {
    backgroundColor: "#FEF2F2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  errorText: {
    color: "#DC2626",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: 10,
    textAlign: "center",
    paddingVertical: 16,
    color: colors.text,
    marginBottom: 24,
  },
  validateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  validateButtonDisabled: {
    backgroundColor: "#93C5FD",
  },
  validateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  cameraButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
  },
  cameraButtonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  successBox: {
    backgroundColor: "#fff",
    padding: 32,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
    alignItems: "center",
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.text,
    marginTop: 16,
  },
  successText: {
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 22,
  },
  nextButton: {
    backgroundColor: "#F3F4F6",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 32,
    width: "100%",
    alignItems: "center",
  },
  nextButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
});
