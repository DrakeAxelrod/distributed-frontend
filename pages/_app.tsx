import "@lib/utils/log";
import "@fontsource/nunito";
import "@styles/global.css";
import { Wrapper } from "@components/Wrapper";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import { Connector, useMqttState } from "mqtt-react-hooks";
import { MqttWrapper } from "@components/MqttWrapper";
import { LoginForm } from "@components/Login";

// helper to check that it workd
const Status = () => {
  /*
   * Status list
   * - Offline
   * - Connected
   * - Reconnecting
   * - Closed
   * - Error: printed in console too
   */
  const { connectionStatus } = useMqttState();

  return <h1>{`Status: ${connectionStatus}`}</h1>;
};

// leave as is most likely
const MyApp = ({ Component, pageProps }: AppProps) => {
  //log(pageProps);
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <MqttWrapper>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </MqttWrapper>
    </ChakraProvider>
  );
};

export default MyApp;
