import { useState } from "react";
import {
    LanguageContext,
} from "../context/LanguageContext";

export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedLangCodeFrom, setSelectedLangCodeFrom] = useState("en");
    const [selectedLangCodeTarget, setSelectedLangCodeTarget] = useState("fr");

    return (
        <LanguageContext.Provider
            value={{
                selectedLangCodeFrom,
                setSelectedLangCodeFrom,
                selectedLangCodeTarget,
                setSelectedLangCodeTarget,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider