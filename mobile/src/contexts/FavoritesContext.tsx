import { createContext, useContext, useState, ReactNode } from "react";

export type FavoriteEstablishment = {
  id: number;
  name: string;
  description: string;
  image: string;
  distance: string;
  isOpen: boolean;
};

type FavoritesContextData = {
  favorites: FavoriteEstablishment[];
  toggleFavorite: (establishment: FavoriteEstablishment) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteEstablishment[]>([]);

  function toggleFavorite(establishment: FavoriteEstablishment) {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === establishment.id);

      if (exists) {
        return prev.filter((item) => item.id !== establishment.id);
      }

      return [...prev, establishment];
    });
  }

  function isFavorite(id: number) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
