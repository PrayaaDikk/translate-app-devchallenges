import { useTranslate } from "@/hooks/useTranslate";
import React from "react";

type ActionBtnProps = {
    isTranslatingForm?: boolean;
    text?: string;
};

const ActionBtn = ({ isTranslatingForm, text }: ActionBtnProps) => {
    const { translate } = useTranslate();

    const handleCopy = () => {
        if (!text) return;
        navigator.clipboard
            .writeText(text)
            .then(() => alert("✅ Copied to clipboard!"))
            .catch(() => alert("❌ Failed to copy!"));
    };

    const handleSound = () => {
        if (!text) return;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    className="border-darkGray1 rounded-2xl border-2 p-2"
                    onClick={handleSound}
                >
                    <svg
                        className="size-6"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z"
                            fill="#4D5562"
                        />
                        <path
                            d="M12.1129 7.05376C12.8903 7.83114 13.329 8.88425 13.3333 9.98363C13.3376 11.083 12.9073 12.1395 12.1361 12.923"
                            stroke="#4D5562"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M15.5472 5.28599C16.791 6.5298 17.4929 8.21478 17.4998 9.97378C17.5067 11.7328 16.8182 13.4232 15.5842 14.6768"
                            stroke="#4D5562"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className="border-darkGray1 rounded-2xl border-2 p-2"
                    onClick={handleCopy}
                >
                    <svg
                        className="size-6"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6668 5.83337V5.83337C11.6668 5.36872 11.6668 5.13639 11.6284 4.94319C11.4706 4.14981 10.8504 3.52962 10.057 3.3718C9.86381 3.33337 9.63148 3.33337 9.16683 3.33337H7.3335C5.44788 3.33337 4.50507 3.33337 3.91928 3.91916C3.3335 4.50495 3.3335 5.44776 3.3335 7.33338V9.16671C3.3335 9.63136 3.3335 9.86369 3.37193 10.0569C3.52974 10.8503 4.14993 11.4705 4.94332 11.6283C5.13651 11.6667 5.36884 11.6667 5.8335 11.6667V11.6667"
                            stroke="#4D5562"
                            strokeWidth="2"
                        />
                        <rect
                            x="8.3335"
                            y="8.33337"
                            width="8.33333"
                            height="8.33333"
                            rx="2"
                            stroke="#4D5562"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
            </div>
            {isTranslatingForm && (
                <button
                    type="button"
                    className="border-lightBlueTheme bg-blueTheme flex items-center gap-2 rounded-xl border px-5 py-3"
                    onClick={translate}
                >
                    <svg
                        className="size-6"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 20H18" stroke="#F9FAFB" strokeWidth="2" />
                        <path d="M9 12H15" stroke="#F9FAFB" strokeWidth="2" />
                        <path
                            d="M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17"
                            stroke="#F9FAFB"
                            strokeWidth="2"
                        />
                    </svg>
                    Translate
                </button>
            )}
        </div>
    );
};

export default ActionBtn;
