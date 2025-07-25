import { createContext } from "react";

type LanguageContextType = {
    selectedLangCodeFrom: string;
    selectedLangCodeTarget: string;
    setSelectedLangCodeFrom: (code: string) => void;
    setSelectedLangCodeTarget: (code: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)