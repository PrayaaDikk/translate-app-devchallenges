import { useState } from "react";
import ActionBtn from "./ui/ActionBtn";
import TranslatingRadioList from "./TranslatingRadioList";
import { LANGUAGE_LIST } from "../constants";

type TranslatingFormProps = {
    setTranslatedText: (text: string) => void;
}

const TranslatingForm = ({setTranslatedText}: TranslatingFormProps) => {
    const [translationText, setTranslationText] = useState("Hello, how are you?");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTranslationText(e.target.value);
    };

    const handleTranslate = () => {
        setTranslatedText(translationText);
    }

    const countChars = translationText.length;

    return (
        <div className="border border-gray1 rounded-4xl bg-background-form1 p-6 text-sm h-full">
            <div className="grid grid-cols-1 gap-4">
                <header className="flex items-center gap-2 text-text font-bold">
                    <TranslatingRadioList languagesList={LANGUAGE_LIST} />
                </header>
                <div className="block h-[1px] bg-gray2"></div>
                <textarea name="translation-text" id="translation-text" value={translationText} onChange={handleChange} className="text-whiteTheme font-bold mt-2 text-base w-full resize-none block" maxLength={500} rows={5}>
                </textarea>
                <p className="text-text text-xs text-right">{countChars}/500</p>
                <footer className="flex items-center justify-between">
                    <ActionBtn />
                    <button
                        type="button"
                        className="px-4 py-2 text-whiteTHeme bg-blueTheme border border-lightBlueTheme rounded-xl flex items-center gap-1 text-whiteTheme font-bold cursor-pointer"
                        onClick={handleTranslate}
                    >
                        <img
                            src="Sort_alfa.svg"
                            alt="sort-alfa"
                            className="size-[20px]"
                        />
                        <p className="text-base">Translate</p>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default TranslatingForm