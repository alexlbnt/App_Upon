import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
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

  useEffect(() => {
    async function checkSession() {
      try {
        const stored = await AsyncStorage.getItem("@upon:auth");
        if (stored === "true") {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Erro ao carregar sessao:", error);
      } finally {
        setIsLoading(false);
      }
    }
    checkSession();
  }, []);

  async function login() {
    setIsAuthenticated(true);
    await AsyncStorage.setItem("@upon:auth", "true");
  }

  async function logout() {
    setIsAuthenticated(false);
    await AsyncStorage.removeItem("@upon:auth");
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
