import { useFonts } from "expo-font";
import { Stack, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { SessionProvider } from "../context/ctx";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <SessionProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Sign In", headerShown: false }}
        />
        <Stack.Screen name="register" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      //{" "}
    </SessionProvider>
  );
}
