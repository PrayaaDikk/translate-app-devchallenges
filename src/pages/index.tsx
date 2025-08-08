import TranslateForm from "@/components/TranslateForm";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Translate App Devchallenges</title>
            </Head>
            <section className="bg-blackTheme relative min-h-[100dvh] overflow-hidden">
                <Image
                    src="/hero_img.jpg"
                    alt="hero-background"
                    className="absolute min-w-[1000px]"
                    width={1920}
                    height={1080}
                    loading="eager"
                    priority
                />
                <main className="relative z-10 mx-auto w-full max-w-[1080px] space-y-2 px-4 xl:mt-10">
                    {/* logo */}
                    <div className="flex items-center justify-center p-12 *:size-auto">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={120}
                            height={120}
                            loading="eager"
                        />
                    </div>

                    {/* form */}
                    <TranslateForm />
                </main>
            </section>
        </>
    );
};

export default Home;
