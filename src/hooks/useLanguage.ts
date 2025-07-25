import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error(
            "useLanguageFrom must be used within LanguageFromProvider"
        );
    return context;
};
