import { useLanguage } from "../hooks/useLanguage";
import Radio from "./ui/Radio";
import { capitalizeWithRegex } from "../utils/helpers";

type TranslatedRadioListProps = {
    languagesList: {
        name: string;
        code: string;
    }[];
};

const TranslatedRadioList = ({ languagesList }: TranslatedRadioListProps) => {
    const { selectedLangCodeTarget, setSelectedLangCodeTarget } = useLanguage();

    return (
        <>
            {/* Daftar radio dari languagesList */}
            {languagesList.map(({ name, code }) => (
                <Radio
                    key={code}
                    name={capitalizeWithRegex(name)}
                    value={name}
                    code={code}
                    checked={code === selectedLangCodeTarget}
                    onChange={() => setSelectedLangCodeTarget(code)}
                    nameType="target"
                />
            ))}

            {/* Radio tambahan untuk Spanish (manual) */}
            <label
                htmlFor="language-es-target"
                className={`p-3 rounded-2xl cursor-pointer flex items-center gap-1 ${
                    "es" === selectedLangCodeTarget
                        ? "text-whiteTheme bg-gray1"
                        : ""
                }`}
            >
                <input
                    id="language-es-target"
                    type="radio"
                    name="language-target"
                    value="spanish"
                    className="hidden"
                    checked={"es" === selectedLangCodeTarget}
                    onChange={() => setSelectedLangCodeTarget("es")}
                />
                <span>Spanish</span>
                <svg
                    className={
                        selectedLangCodeTarget === "es"
                            ? "stroke-whiteTheme"
                            : "stroke-[#6C727F]"
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 6L8 10L4 6" strokeWidth="2" />
                </svg>
            </label>
        </>
    );
};

export default TranslatedRadioList;
