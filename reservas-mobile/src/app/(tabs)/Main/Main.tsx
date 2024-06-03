// App.js
import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Main() {
  const cards = [
    { title: "Card 1", content: "This is the content of card 1" },
    { title: "Card 2", content: "This is the content of card 2" },
    { title: "Card 3", content: "This is the content of card 3" },
    // { title: 'Card 4', content: 'This is the content of card 4' },
    // Add more cards as needed
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 5,
          paddingBottom: 70,
        }} // Add some padding at the bottom
      >
        <View style={styles.container}>
          {/* {cards.map((card, index) => ( */}

          <TouchableOpacity
            style={{ height: "33%" }}
            onPress={() => router.push("Main/FormReserva")}
          >
            <Card
              style={{
                flex: 1,
                marginVertical: 8,
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.938)", // added transparent background
                borderRadius: 10, // added rounded corners
                // ShadowColor: "rgba(0, 0, 0, 0.2)", // added subtle shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Card.Content>
                <Title
                  style={{
                    textAlign: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  CRIAR RESERVA
                </Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: "33%" }}
            onPress={() => router.push("Main/ListaReserva")}
          >
            <Card
              style={{
                flex: 1,
                marginVertical: 8,
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.938)", // added transparent background
                borderRadius: 10, // added rounded corners
                // ShadowColor: "rgba(0, 0, 0, 0.2)", // added subtle shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Card.Content>
                <Title
                  style={{
                    textAlign: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  MINHAS RESERVAS
                </Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: "33%" }}
            onPress={() => router.push("Main/ListaLocal")}
          >
            <Card
              style={{
                flex: 1,
                marginVertical: 8,
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.938)", // added transparent background
                borderRadius: 10, // added rounded corners
                // ShadowColor: "rgba(0, 0, 0, 0.2)", // added subtle shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Card.Content>
                <Title
                  style={{
                    textAlign: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  MEUS LOCAIS
                </Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          {/* // ))} */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 16,
  },
  card: {
    flex: 1,
    marginVertical: 8,
    justifyContent: "center",
  },
});
