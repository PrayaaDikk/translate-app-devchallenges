import ActionBtn from "./ui/ActionBtn";

const TranslatingForm = () => {
    return (
        <div className="border border-gray1 rounded-4xl bg-background-form1 p-6 text-sm">
            <div className="space-y-4">
                <header className="flex items-center gap-2 text-text font-bold *:p-3">
                    <p>Detect Language</p>
                    <p className="text-whiteTheme bg-gray1 rounded-2xl">
                        English
                    </p>
                    <p>French</p>
                    <p>Spanish <span></span></p>
                </header>
                <div className="block h-[1px] bg-gray2"></div>
                <textarea
                    name="translation-text"
                    id="translation-text"
                    rows={8}
                    className="text-whiteTheme font-bold mt-2 text-base w-full resize-none"
                    maxLength={500}
                    defaultValue={"Hello, how are you?"}
                >
                </textarea>
                <p className="text-text text-xs text-right">19/500</p>
                <footer className="flex items-center justify-between">
                    <ActionBtn />
                    <button type="button" className="px-4 py-2 text-whiteTHeme bg-blueTheme border border-lightBlueTheme rounded-xl flex items-center gap-1 text-whiteTheme font-bold">
                        <img src="./Sort_alfa.svg" alt="sort-alfa" className="size-[20px]" />
                        <p className="text-base">Translate</p>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default TranslatingForm;
