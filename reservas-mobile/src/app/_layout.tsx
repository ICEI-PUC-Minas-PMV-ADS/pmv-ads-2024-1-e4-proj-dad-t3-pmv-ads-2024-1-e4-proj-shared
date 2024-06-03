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
    // <SessionProvider>
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Entrar", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Criar nova conta", headerShown: false }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Main", headerShown: false }}
      />
      <Stack.Screen
        name="+not-found"
        options={{ title: "Not Found", headerShown: false }}
      />
    </Stack>
    //{" "}
    // </SessionProvider>
  );
}
