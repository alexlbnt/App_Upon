import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* 🔄 Carrega login salvo ao abrir o app */
  useEffect(() => {
    async function loadStoredUser() {
      try {
        const storedUser = await AsyncStorage.getItem(
          "@upon:user"
        );

        if (storedUser) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Erro ao carregar usuário:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadStoredUser();
  }, []);

  /* 🔐 Login */
  async function login() {
    setIsAuthenticated(true);

    await AsyncStorage.setItem(
      "@upon:user",
      JSON.stringify({ logged: true })
    );
  }

  /* 🚪 Logout */
  async function logout() {
    setIsAuthenticated(false);

    await AsyncStorage.removeItem("@upon:user");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
