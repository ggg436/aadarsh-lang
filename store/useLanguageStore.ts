import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en", // default language
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "native-language",
    },
  ),
);
