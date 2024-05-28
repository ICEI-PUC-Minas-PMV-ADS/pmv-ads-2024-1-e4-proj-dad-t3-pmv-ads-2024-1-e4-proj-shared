// screens/CreateReservation.js
import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Card } from "react-native-paper";
import { useRouter } from "expo-router";

const CreateReservation = () => {
  const [condominio, setCondominio] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  const handleCreateReservation = () => {
    // Handle form submission logic here
    console.log({ condominio, local, date });
    router.push("/reservationSuccess"); // Navigate to a success screen or handle navigation
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Picker
            selectedValue={condominio}
            onValueChange={(itemValue) => setCondominio(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Select Condominio" value="" />
            <Picker.Item label="Condominio 1" value="condominio1" />
            <Picker.Item label="Condominio 2" value="condominio2" />
          </Picker>

          <Picker
            selectedValue={local}
            onValueChange={(itemValue) => setLocal(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Select Local" value="" />
            <Picker.Item label="Local 1" value="local1" />
            <Picker.Item label="Local 2" value="local2" />
          </Picker>

          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.dateInput}
          >
            <Text style={styles.dateText}>{date.toDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}

          <Button title="Criar Reserva" onPress={handleCreateReservation} />
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  dateInput: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
});

export default CreateReservation;
