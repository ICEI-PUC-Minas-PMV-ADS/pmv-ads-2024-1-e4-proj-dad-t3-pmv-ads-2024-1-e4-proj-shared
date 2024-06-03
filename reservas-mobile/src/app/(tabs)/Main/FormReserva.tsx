import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { router } from "expo-router";

const condominios = [
  {
    id: 1,
    name: "Condominio Alto do Parque",
    locais: ["Churrasqueira", "Salão de Festas"],
  },
  {
    id: 2,
    name: "Condominio Alto da Praia",
    locais: ["Piscina", "Espaço Gourmet"],
  },
];

export default function ReservaForm() {
  const { control, handleSubmit, watch } = useForm();
  const [selectedCondominio, setSelectedCondominio] = useState();
  const [locais, setLocais] = useState([]);
  const [date, setDate] = useState(new Date("2024-06-02T00:00:00.000Z"));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: any) => {
    router.push("/Main/Main");
    console.log(data);
  };

  const watchCondominio = watch("condominio");

  useEffect(() => {
    const condominio = condominios.find(
      (c) => c.id === parseInt(watchCondominio)
    );
    if (condominio) {
      setLocais(condominio.locais);
    } else {
      setLocais([]);
    }
  }, [watchCondominio]);

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text>Selecione um Condominio:</Text>
            <Controller
              name="condominio"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(value) => {
                    onChange(value);
                    setSelectedCondominio(value);
                  }}
                  style={styles.picker}
                >
                  <Picker.Item label="Select a Condominio" value="" />
                  {condominios.map((condominio) => (
                    <Picker.Item
                      key={condominio.id}
                      label={condominio.name}
                      value={condominio.id.toString()}
                    />
                  ))}
                </Picker>
              )}
            />
          </View>

          <View style={styles.inputBox}>
            <Text>Qual local do Condominio deseja Reservar?</Text>
            <Controller
              name="local"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(value) => onChange(value)}
                  style={styles.picker}
                  enabled={locais.length > 0}
                >
                  <Picker.Item label="Select a Local" value="" />
                  {locais.map((local, index) => (
                    <Picker.Item key={index} label={local} value={local} />
                  ))}
                </Picker>
              )}
            />
          </View>

          <View style={styles.inputBox}>
            <Text>Escolher uma data disponível:</Text>
            <Controller
              name="date"
              control={control}
              defaultValue={date}
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    label="Date"
                    value={value.toLocaleDateString("pt-BR")}
                    onFocus={() => setShowDatePicker(true)}
                    editable={true}
                    style={styles.input}
                  />
                  {showDatePicker && (
                    <DateTimePicker
                      value={value || date}
                      mode="date"
                      display="default"
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(false);
                        if (selectedDate) {
                          onChange(selectedDate);
                          setDate(selectedDate);
                        }
                      }}
                    />
                  )}
                </>
              )}
            />
          </View>

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Add this to vertically align the form
    alignItems: "center", // Add this to horizontally align the form
    padding: 16,
  },
  form: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.804)", // White background with 80% opacity
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4, // for Android
  },
  picker: {
    height: 50,
    width: "100%",
  },
  inputBox: {
    marginTop: 20,
  },
  input: {
    marginTop: 8,
    marginBottom: 16,
  },
});
