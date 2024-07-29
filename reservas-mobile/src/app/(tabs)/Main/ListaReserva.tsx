import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSession } from "../../../context/ctx";

const mockReservas = [
  {
    id: 1,
    name: "Condominio Sol Nascente",
    area: "Churrasqueira",
    date: "Jun 29, 2024",
  },
  // {
  //   id: 2,
  //   name: "Condominio Alto da Parque",
  //   area: "Piscina",
  //   date: "Jun 3, 2024",
  // },
  // {
  //   id: 3,
  //   name: "Condominio Alto da Praia",
  //   area: "Espaço Gourmet",
  //   date: "Jun 4, 2024",
  // },
];

const GroceryDeliveryApp = () => {
  const { session } = useSession();
  const [reservas, setReservas] = useState(mockReservas);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // The useEffect is not fetching data anymore, but you can leave it here if you plan to use it for real data later.
  }, [session]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Reservas</Text>
        <FlatList
          data={reservas}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.item}>
                <View style={styles.itemContent}>
                  <Text style={styles.itemName}>Condomínio: {item.name}</Text>
                  <Text style={styles.itemPrice}>Data: {item.date}</Text>
                  <Text style={styles.itemPrice}>Área: {item.area}</Text>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <TouchableOpacity>
                    <Ionicons name="create-outline" size={32} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={32} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#fff",
    marginHorizontal: 20,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#999",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#FFC107",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GroceryDeliveryApp;
