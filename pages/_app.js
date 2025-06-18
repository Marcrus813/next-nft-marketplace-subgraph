import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/config/web3KitConfig";

import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import Layout from "@/components/PageComponents/Layout";

const queryClient = new QueryClient();

const SUBGRAPH_URI = process.env.NEXT_PUBLIC_SUBGRAPH_API_URI;
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Tells client where to make the queries
const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: SUBGRAPH_URI,
});

export default function App({ Component, pageProps }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={darkTheme({
                        fontStack: "system",
                    })}
                    modalSize={"compact"}
                >
                    <ApolloProvider client={apolloClient}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ApolloProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
