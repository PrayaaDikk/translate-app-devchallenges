import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={dmSans.className}>
            <Component {...pageProps} />
        </main>
    );
}
