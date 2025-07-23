import TranslatingForm from "./components/TranslatingForm";
import TranslatedForm from "./components/TranslatedForm";

const App = () => {
    return (
        <section className="relative min-h-[100dvh] bg-[#040711] overflow-hidden">
            <img src="/hero_img.jpg" alt="hero-background" className="absolute left-0 right-0 min-h-[200px] w-full object-cover" width={1920} />
            <div className="py-8 px-4 lg:p-14">
                <main className="relative z-1">
                    <header className="flex items-center justify-center">
                        <img src="/logo.svg" alt="logo" />
                    </header>
                    <main className="flex flex-col gap-4 mt-8 xl:flex-row *:flex-1/2">
                        <TranslatingForm />
                        <TranslatedForm />
                    </main>
                </main>
            </div>
        </section>
    );
};

export default App;
