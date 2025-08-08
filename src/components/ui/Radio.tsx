type RadioProps = {
    label: string;
    code: string;
    id: string;
    onChange: (code: string) => void;
    dropdown?: boolean;
    checked?: boolean;
    disabled?: boolean;
    nameType?: string;
};

const Radio = ({
    label,
    code,
    id,
    onChange,
    dropdown = false,
    checked = false,
    disabled = false,
    nameType = "translating",
}: RadioProps) => {
    const nameInput = `${nameType}-language`;
    const inputId = `${id}-${code}`;

    return (
        <label
            htmlFor={inputId}
            className={`cursor-pointer rounded-2xl px-4 py-3 font-bold ${checked ? "bg-darkGray1" : ""}`}
        >
            <input
                id={inputId}
                type="radio"
                className="hidden"
                name={nameInput}
                value={code}
                checked={checked}
                onChange={() => onChange(code)}
                disabled={disabled}
            />
            <span
                className={`flex items-center gap-1 text-sm select-none ${checked ? "stroke-whiteTheme text-whiteTheme" : "stroke-grayTheme text-grayTheme"}`}
            >
                {label}
                {dropdown && (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 6L8 10L4 6" strokeWidth="2" />
                    </svg>
                )}
            </span>
        </label>
    );
};

export default Radio;
