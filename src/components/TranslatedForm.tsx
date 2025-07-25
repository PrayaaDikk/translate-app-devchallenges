import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { LANGUAGE_LIST } from "../constants";
import TranslatedRadioList from "./TranslatedRadioList";
import ActionBtn from "./ui/ActionBtn";
import axios from "axios";

type TranslatedFormProps = {
    translatedText: string;
}

const TranslatedForm = ({ translatedText }: TranslatedFormProps) => {
    const { selectedLangCodeFrom, selectedLangCodeTarget, setSelectedLangCodeFrom, setSelectedLangCodeTarget } = useLanguage();
    const [translateResults, setTranslateResults] = useState("");

    const handleSwapLanguages = () => {
        setSelectedLangCodeFrom(selectedLangCodeTarget);
        setSelectedLangCodeTarget(selectedLangCodeFrom);
    };

    useEffect(() => {
        const fetchTranslation = async () => {
            if (selectedLangCodeFrom && selectedLangCodeTarget && translatedText) {
                try {
                    const response = await axios.get('/api/get', {
                        params: {
                            q: translatedText,
                            langpair: `${selectedLangCodeFrom}|${selectedLangCodeTarget}`
                        }
                    });
                    setTranslateResults(response.data.responseData.translatedText);
                } catch (error) {
                    console.error("Error fetching translation:", error);
                }
            }
        };

        fetchTranslation();

    }, [selectedLangCodeFrom, selectedLangCodeTarget, translatedText]);

    return (
        <div className="border border-gray1 rounded-4xl bg-background-form2 p-6 text-sm h-full">
            <div className="flex flex-col h-full space-y-4">
                <header className="flex items-center justify-between text-text font-bold">
                    <div className="flex items-center gap-2 *:p-3">
                        <TranslatedRadioList languagesList={LANGUAGE_LIST} />
                    </div>
                    <button type="button" onClick={handleSwapLanguages} className="outline-2 outline-gray1 p-2 rounded-xl cursor-pointer">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.6665 6.66671L0.959397 5.9596L0.25229 6.66671L0.959397 7.37381L1.6665 6.66671ZM17.4998 7.66671C18.0521 7.66671 18.4998 7.21899 18.4998 6.66671C18.4998 6.11442 18.0521 5.66671 17.4998 5.66671V7.66671ZM4.29273 2.62627L0.959397 5.9596L2.37361 7.37381L5.70694 4.04048L4.29273 2.62627ZM0.959397 7.37381L4.29273 10.7071L5.70694 9.29293L2.37361 5.9596L0.959397 7.37381ZM1.6665 7.66671H17.4998V5.66671H1.6665V7.66671Z"
                                fill="#4D5562"
                            />
                            <path
                                d="M18.3335 13.3333L19.0406 12.6262L19.7477 13.3333L19.0406 14.0404L18.3335 13.3333ZM10.8335 14.3333C10.2812 14.3333 9.8335 13.8856 9.8335 13.3333C9.8335 12.781 10.2812 12.3333 10.8335 12.3333L10.8335 14.3333ZM15.7073 9.29289L19.0406 12.6262L17.6264 14.0404L14.2931 10.7071L15.7073 9.29289ZM19.0406 14.0404L15.7073 17.3738L14.2931 15.9596L17.6264 12.6262L19.0406 14.0404ZM18.3335 14.3333L10.8335 14.3333L10.8335 12.3333L18.3335 12.3333L18.3335 14.3333Z"
                                fill="#4D5562"
                            />
                        </svg>
                    </button>
                </header>
                <div className="block h-[1px] bg-gray2"></div>
                <div className="flex flex-col justify-between h-full flex-1">
                    <textarea name="translated-text" id="translated-text" value={translateResults} className="text-whiteTheme font-bold mt-2 text-base w-full resize-none block" maxLength={500} rows={5} disabled>
                    </textarea>
                    <ActionBtn />
                </div>
            </div>
        </div>
    );
};

export default TranslatedForm;
