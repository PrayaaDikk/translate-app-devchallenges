type RadioProps = {
    name: string;
    value: string;
    code: string;
    checked?: boolean;
    onChange: (code: string) => void;
    nameType?: string;
};

const getInputId = (code: string, nameType?: string) =>
    `language-${code}${nameType ? `-${nameType}` : ""}`;

const getInputName = (nameType?: string) =>
    `language${nameType ? `-${nameType}` : ""}`;

const Radio = ({
    name,
    value,
    code,
    checked = false,
    onChange,
    nameType,
}: RadioProps) => (
    <label
        htmlFor={getInputId(code, nameType)}
        className={`p-3 rounded-2xl cursor-pointer${checked ? " text-whiteTheme bg-gray1" : ""}`}
    >
        <input
            id={getInputId(code, nameType)}
            type="radio"
            name={getInputName(nameType)}
            value={value}
            className="hidden"
            checked={checked}
            onChange={() => onChange(code)}
            disabled={!code}
        />
        <span>{name}</span>
    </label>
);

export default Radio;