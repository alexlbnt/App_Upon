import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const api = axios.create({
  baseURL: "http://10.43.25.237:3000",
  // IPv4 do PC
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("@upon:token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.error("Auth Interceptor Error:", err);
  }
  return config;
});
