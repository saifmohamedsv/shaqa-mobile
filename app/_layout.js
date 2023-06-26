import { useCallback } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import AuthContainer from "../HOCs/withAuth";

SplashScreen.preventAutoHideAsync();

export default () => {
  const [fontsLoaded] = useFonts({
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <AuthContainer>
        <Stack onLayout={onLayoutRootView} />
      </AuthContainer>
    </Provider>
  );
};
