import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type WalletItem = {
  id: number;
  name: string;
  price: number; // current price if needed
  discountValue: number; // added to reflect real discount
  image: string;
  storeName: string; // Used to group coupons by establishment
};

type WalletContextData = {
  items: WalletItem[];
  usedItems: WalletItem[];
  addCoupon: (item: WalletItem) => void;
  removeCoupon: (id: number) => void;
  clearWallet: () => void;
  markAsUsed: (id: number) => void;
  clearUsedWallet: () => void;
  totalDiscountSaved: number;
};

const WalletContext = createContext<WalletContextData>({} as WalletContextData);

export function WalletProvider({ children }: any) {
  const [items, setItems] = useState<WalletItem[]>([]);
  const [usedItems, setUsedItems] = useState<WalletItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadWallet() {
      try {
        const stored = await AsyncStorage.getItem("@upon:wallet");
        if (stored) setItems(JSON.parse(stored));

        const storedUsed = await AsyncStorage.getItem("@upon:usedWallet");
        if (storedUsed) setUsedItems(JSON.parse(storedUsed));
      } catch (error) {
        console.error("Erro ao carregar carteira:", error);
      } finally {
        setIsLoaded(true);
      }
    }
    loadWallet();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem("@upon:wallet", JSON.stringify(items));
      AsyncStorage.setItem("@upon:usedWallet", JSON.stringify(usedItems));
    }
  }, [items, usedItems, isLoaded]);

  function addCoupon(item: WalletItem) {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev; // Cupom já foi salvo
      }
      return [...prev, item];
    });
  }

  function removeCoupon(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearWallet() {
    setItems([]);
  }

  function markAsUsed(id: number) {
    setItems((prev) => {
      const itemToMove = prev.find((item) => item.id === id);
      if (itemToMove) {
        setUsedItems((used) => [itemToMove, ...used]);
      }
      return prev.filter((item) => item.id !== id);
    });
  }

  function clearUsedWallet() {
    setUsedItems([]);
  }

  // Soma de todos os descontos acumulados na carteira
  const totalDiscountSaved = items.reduce(
    (sum, item) => sum + (item.discountValue || 0),
    0
  );

  return (
    <WalletContext.Provider
      value={{
        items,
        usedItems,
        addCoupon,
        removeCoupon,
        clearWallet,
        markAsUsed,
        clearUsedWallet,
        totalDiscountSaved,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
