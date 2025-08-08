"use client";
import React, { createContext, useState, ReactNode } from "react";

type TranslateContextType = {
    sourceLang: string;
    targetLang: string;
    textToTranslate: string;
    translatedText: string;
    setSourceLang: (lang: string) => void;
    setTargetLang: (lang: string) => void;
    setTextToTranslate: (text: string) => void;
    swapLanguages: () => void;
    translate: () => void;
};

export const TranslateContext = createContext<TranslateContextType | undefined>(
    undefined,
);

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
    const [sourceLang, setSourceLang] = useState("en");
    const [targetLang, setTargetLang] = useState("fr");
    const [textToTranslate, setTextToTranslate] = useState(
        "hello, how are you?",
    );
    const [translatedText, setTranslatedText] = useState(
        "bonjour, comment allez-vous?",
    );

    const swapLanguages = () => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
        setTextToTranslate(translatedText);
        setTranslatedText(textToTranslate);
    };

    const translate = () => {
        if (!textToTranslate.trim()) return;

        fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
                textToTranslate,
            )}&langpair=${sourceLang}|${targetLang}`,
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.responseData?.translatedText) {
                    setTranslatedText(data.responseData.translatedText);
                } else {
                    setTranslatedText("⚠️ Translation not available.");
                }
            })
            .catch((error) => {
                console.error("Translation API error:", error);
                setTranslatedText("⚠️ Error fetching translation.");
            });
    };

    return (
        <TranslateContext.Provider
            value={{
                sourceLang,
                targetLang,
                textToTranslate,
                translatedText,
                setSourceLang,
                setTargetLang,
                setTextToTranslate,
                swapLanguages,
                translate,
            }}
        >
            {children}
        </TranslateContext.Provider>
    );
};
