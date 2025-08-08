import React from "react";
import { useTranslate } from "@/hooks/useTranslate";
import FormHeader from "./ui/FormHeader";
import ActionBtn from "./ui/ActionBtn";
import { LANGUAGE_LIST } from "@/constants";

const TranslatingForm = () => {
    const { textToTranslate, setTextToTranslate } = useTranslate();

    return (
        <section className="bg-bg2wop border-darkGray1 h-full rounded-4xl border p-6 font-bold">
            <main className="flex h-full flex-col space-y-6 [&>form]:flex-1">
                <FormHeader languageList={LANGUAGE_LIST} isTranslatingForm />
                <div className="bg-gray bg-darkGray1 h-[1px]"></div>
                <form className="flex flex-col space-y-4">
                    <div className="flex h-full flex-col justify-between">
                        <textarea
                            name="translatingText"
                            id="translatingText"
                            className="block h-full w-full resize-none overflow-y-auto bg-transparent outline-none"
                            rows={7}
                            maxLength={500}
                            value={textToTranslate}
                            onChange={(e) => setTextToTranslate(e.target.value)}
                        />
                        <ActionBtn isTranslatingForm text={textToTranslate} />
                    </div>
                </form>
            </main>
        </section>
    );
};

export default TranslatingForm;
