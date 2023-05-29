import LogProvider from "@/context/Landing";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<LogProvider>
				<Component {...pageProps} />
			</LogProvider>
		</SessionProvider>
	);
}
