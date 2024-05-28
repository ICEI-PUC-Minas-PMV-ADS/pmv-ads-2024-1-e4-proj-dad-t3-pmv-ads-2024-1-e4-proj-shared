import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      title: "Card 1",
      backgroundColor: "#ffdcb2",
      titleColor: "#ff8c00",
    },
    {
      id: 2,
      title: "Card 2",
      backgroundColor: "#bfdfdf",
      titleColor: "#008080",
    },
    {
      id: 3,
      title: "Card 3",
      backgroundColor: "#e2caf8",
      titleColor: "#8a2be2",
    },
  ]);

  const renderAppointmentCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Text style={[styles.cardTitle, { color: item.titleColor }]}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={appointments}
        renderItem={renderAppointmentCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // added to make the cards take up equal height
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  listContainer: {
    flex: 1,
    justifyContent: "space-between", // added to make the cards take up equal height
  },
  card: {
    flex: 1, // added to make the cards take up equal height
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
