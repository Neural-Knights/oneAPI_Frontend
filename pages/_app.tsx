import LogProvider from "@/context/Landing";
import "@/styles/globals.css";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<HMSRoomProvider>
				<LogProvider>
					<Component {...pageProps} />
				</LogProvider>
			</HMSRoomProvider>
		</SessionProvider>
	);
}
