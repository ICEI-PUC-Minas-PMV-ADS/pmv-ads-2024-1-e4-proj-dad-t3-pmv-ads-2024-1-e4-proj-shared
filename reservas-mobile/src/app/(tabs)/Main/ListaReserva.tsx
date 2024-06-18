import React, { useState, useEffect } from 'react';
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

// const items = [
//   {
//     id: 1,
//     name: "Condominio Alto do Parque",
//     price: "Salão de Festas",
//     date: "Jun 1, 2024",
//   },
//   {
//     id: 2,
//     name: "Condominio Alto da Parque",
//     price: "Piscina",
//     date: "Jun 3, 2024",
//   },
//   {
//     id: 3,
//     name: "Condominio Alto da Praia",
//     price: "Espaço Gourmet",
//     date: "Jun 4, 2024",
//   },
// ];

const GroceryDeliveryApp = () => {
  const { session } = useSession();
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch('https://localhost:44346/api/reserva', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session}`,
          },
        });
        const data = await response.json();
        setReservas(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReservas();
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
        uri: 'https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                  <Text style={styles.itemName}>Condomínio: {item.condominioId}</Text>
                  <Text style={styles.itemPrice}>Data: {item.dataHorario}</Text>
                  <Text style={styles.itemPrice}>Condomino: {item.condominoId}</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
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
          keyExtractor={(item) => item.id}
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
