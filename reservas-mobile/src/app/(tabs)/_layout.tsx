import { Tabs, router, useSegments } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { useSession } from "../../context/ctx";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  if (isLoading) {
    return null;
  }

  if (!session) {
    console.log("entrei aqui 2");
    router.push("/");
  }
  const segments = useSegments();
  console.log("Current segments:", segments);

  // Check if the current route is exactly the main screen
  const isMainRoute = segments[2] === "Main";
  console.log("Is Main Route:", isMainRoute);
  return (
    <Tabs
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 27,
          left: 16,
          right: 16,
          height: 64,
          elevation: 0,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          borderWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: "white",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Perfil"
        options={{
          headerShown: false,
          title: "Perfil",
          href: "/Perfil",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="Main"
        options={{
          headerShown: false,
          title: "Main",
          href: "/Main",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} size={24} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="FormReserva"
        options={{
          title: "Formulario de Reserva",
          href: "/FormReserva",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="home"
              color={color}
              size={24}
            />
          ),
        }}
      /> */}
    </Tabs>
  );
}
