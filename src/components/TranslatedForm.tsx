import React from "react";
import { useTranslate } from "@/hooks/useTranslate";
import FormHeader from "./ui/FormHeader";
import { LANGUAGE_LIST } from "@/constants";
import ActionBtn from "./ui/ActionBtn";

const TranslatedForm = () => {
    const { translatedText } = useTranslate();

    return (
        <section className="bg-bg1wop border-darkGray1 h-full rounded-4xl border p-6 font-bold">
            <main className="flex h-full flex-col space-y-6 [&>form]:flex-1">
                <FormHeader languageList={LANGUAGE_LIST} />
                <div className="bg-gray bg-darkGray1 h-[1px]"></div>
                <form className="flex flex-col space-y-4">
                    <div className="flex h-full flex-col justify-between">
                        <textarea
                            name="translatedText"
                            id="translatedText"
                            className="block h-full w-full resize-none overflow-y-auto bg-transparent outline-none"
                            rows={7}
                            maxLength={500}
                            value={translatedText}
                            readOnly
                        />
                    </div>
                    <ActionBtn text={translatedText} />
                </form>
            </main>
        </section>
    );
};

export default TranslatedForm;
