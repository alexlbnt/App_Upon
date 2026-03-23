import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

import { useWallet } from "../contexts/WalletContext";
import { colors } from "../theme/colors";

export default function ValidateCouponsScreen() {
  const navigation = useNavigation<any>();
  const { items, markAsUsed } = useWallet();

  // Payload for the store's POS scanner (Example)
  const qrPayload = JSON.stringify({
    userId: "USR-999-MOCK",
    timestamp: new Date().getTime(),
    coupons: items.map(c => ({ id: c.id, store: c.storeName }))
  });

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Validação no Caixa</Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.qrContainer}>
          {items.length > 0 ? (
            <>
              <QRCode 
                value={qrPayload} 
                size={180} 
                color={colors.text} 
                backgroundColor="white" 
              />
              <Text style={styles.qrLabel}>Apresente este código ao caixa</Text>
              
              <TouchableOpacity 
                 style={{ marginTop: 24, paddingVertical: 12, paddingHorizontal: 20, backgroundColor: colors.muted, borderRadius: 8 }}
                 onPress={() => {
                   items.forEach(item => markAsUsed(item.id));
                   navigation.goBack();
                 }}
              >
                 <Text style={{color: "#fff", fontWeight: "600"}}>Simular Leitura no Caixa</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Ionicons name="qr-code-outline" size={160} color={colors.text} />
              <Text style={styles.qrLabel}>Apresente este código ao caixa</Text>
            </>
          )}
        </View>

        {/* INFO */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={18} color={colors.primary} />
          <Text style={styles.infoText}>
            Este QR Code contém todos os cupons salvos na sua carteira. O caixa bipará este código para aplicar o desconto.
          </Text>
        </View>

        <Text style={styles.subtitle}>Cupons a Validar:</Text>
        
        {/* LISTA DE CUPONS (Apenas Resumo) */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <View style={styles.couponCard}>
              <View style={styles.couponLeft}>
                <Text style={styles.couponName}>{item.name}</Text>
                <Text style={styles.couponStore}>
                  {item.storeName}
                </Text>
              </View>

              <View style={styles.couponRight}>
                <Text style={styles.couponDiscount}>DESCONTO</Text>
                {item.discountValue && (
                  <Text style={styles.couponPrice}>
                    R$ {item.discountValue.toFixed(2).replace(".", ",")}
                  </Text>
                )}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 32,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    elevation: 2,
  },

  qrLabel: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    elevation: 1,
  },

  infoText: {
    marginLeft: 12,
    fontSize: 13,
    color: "#0369A1",
    flex: 1,
    lineHeight: 18,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },

  couponCard: {
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },

  couponLeft: {
    flex: 1,
  },

  couponName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  couponStore: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  couponRight: {
    alignItems: "flex-end",
  },

  couponPrice: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.primary,
  },

  couponDiscount: {
    fontSize: 10,
    color: "#16A34A",
    fontWeight: "700",
    marginBottom: 2,
  },
});
