import { Tabs, Redirect } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { useSession } from "../../context/ctx";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    // return <Redirect href="/" />;
  }

  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
          borderWidth: 0, // add this line
          borderBottomWidth: 0,
          backgroundColor: "white",
          // alignItems: "center",
          justifyContent: "center",
          // backgroundColor: Colors[colorScheme ?? "light"].background,
          // borderTopColor: Colors[colorScheme ?? "light"].tabIconDefault,
        },
      }}
    >
      <Tabs.Screen
        name="Perfil"
        options={{
          headerShown: false,
          title: "Perfil",
          href: "/Perfil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: focused ? 14 : 12 }}>Perfil</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          href: "/Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: focused ? 14 : 12 }}>Home</Text>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="FormReserva"
        options={{
          title: "Formulario de Reserva",
          href: "/FormReserva",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? 28 : 24}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: focused ? 14 : 12 }}>Home</Text>
          ),
        }}
      /> */}
    </Tabs>
  );
}
