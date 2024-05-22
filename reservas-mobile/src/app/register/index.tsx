import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function RegistrationScreen() {
  const [selectedTab, setSelectedTab] = useState("one");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20,
          marginBottom: 30,
        }}
      >
        <Image
          source={require("../../../assets/images/logo2.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "one" ? styles.activeTab : null]}
          onPress={() => setSelectedTab("one")}
        >
          <Text style={styles.tabText}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "two" ? styles.activeTab : null]}
          onPress={() => setSelectedTab("two")}
        >
          <Text style={styles.tabText}>Condomínio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ios-filled/512/user.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Nome"
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                selectedTab === "one"
                  ? "https://img.icons8.com/ios-filled/512/file.png"
                  : "https://img.icons8.com/ios-filled/512/doc.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder={selectedTab === "one" ? "CPF" : "CNPJ"}
            underlineColorAndroid="transparent"
            value={cpfCnpj}
            onChangeText={(text) => setCpfCnpj(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ios-filled/512/circled-envelope.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ios-filled/512/key.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Senha"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/ios-filled/512/key.png",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Confirme a senha"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.registerButton]}
        >
          <Text style={styles.registerText}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 250,
  },
  tab: {
    flex: 1,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
    opacity: 0.5,
  },
  activeTab: {
    borderBottomColor: "#00b5ec",
    opacity: 0.8,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderBottomColor: "#2c87ad",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    color: "white",
  },
  registerButton: {
    backgroundColor: "#00b5ec",
  },
  registerText: {
    color: "white",
    fontWeight: "bold",
  },
});
