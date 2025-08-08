import { TranslateContext } from "@/context/TranslateContext";
import { useContext } from "react";

export const useTranslate = () => {
    const ctx = useContext(TranslateContext);
    if (!ctx)
        throw new Error("useTranslate must be used within TranslateProvider");
    return ctx;
};
