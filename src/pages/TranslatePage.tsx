import { useState } from "react";
import TranslatedForm from "../components/TranslatedForm";
import TranslatingForm from "../components/TranslatingForm";
import { LanguageProvider } from "../provider/LanguageProvider";

const TranslatePage = () => {
    const [translatedText, setTranslatedText] = useState("Hello, how are you?");
    
    return (
        <section className="relative min-h-[100dvh] bg-[#040711] overflow-hidden">
            <img
                src="hero_img.jpg"
                alt="hero-background"
                className="absolute left-0 right-0 min-h-[200px] w-full object-cover"
                width={1920}
            />
            <div className="py-12 px-4 lg:p-18">
                <main className="relative z-1">
                    <header className="flex items-center justify-center">
                        <img src="logo.svg" alt="logo" className="m-8" />
                    </header>
                    <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                        <LanguageProvider>
                            <TranslatingForm setTranslatedText={setTranslatedText} />
                            <TranslatedForm translatedText={translatedText} />
                        </LanguageProvider>
                    </main>
                </main>
            </div>
        </section>
    );
};

export default TranslatePage;
