import { useLanguage } from "../hooks/useLanguage";
import Radio from "./ui/Radio";
import { capitalizeWithRegex } from "../utils/helpers";

type TranslatingRadioListProps = {
    languagesList: {
        name: string;
        code: string;
    }[];
};

const TranslatingRadioList = ({ languagesList }: TranslatingRadioListProps) => {
    const { selectedLangCodeFrom, setSelectedLangCodeFrom } = useLanguage();

    return (
        <>
            {languagesList.map(({ name, code }) => (
                <Radio
                    key={code}
                    name={capitalizeWithRegex(name)}
                    value={name}
                    code={code}
                    checked={code === selectedLangCodeFrom}
                    onChange={() => setSelectedLangCodeFrom(code)}
                />
            ))}
            <label
                htmlFor="langauge-es"
                className={`p-3 rounded-2xl cursor-pointer flex items-center gap-1 ${
                    "es" === selectedLangCodeFrom ? "text-whiteTheme bg-gray1" : ""}`}
            >
                <input
                    id="language-es"
                    type="radio"
                    name="language"
                    value="spanish"
                    className="hidden"
                    checked={"es" === selectedLangCodeFrom}
                    onChange={() => setSelectedLangCodeFrom("es")}
                />
                <span>Spanish</span>
                <svg
                    className={selectedLangCodeFrom === "es" ? "stroke-whiteTheme" : "stroke-[#6C727F]"}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 6L8 10L4 6"
                        strokeWidth="2"
                    />
                </svg>
            </label>
        </>
    );
};

export default TranslatingRadioList;
