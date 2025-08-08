import TranslatingForm from "./TranslatingForm";
import TranslatedForm from "./TranslatedForm";
import { TranslateProvider } from "@/context/TranslateContext";

const TranslateForm = () => {
    return (
        <TranslateProvider>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                <TranslatingForm />
                <TranslatedForm />
            </div>
        </TranslateProvider>
    );
};

export default TranslateForm;
