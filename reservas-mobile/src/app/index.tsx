import { Link } from "expo-router";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useSession } from "../context/ctx";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = useSession();
  // showAlert = (viewId) => Alert.alert("Alert", "Button pressed " + viewId);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://your-api-url.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await response.json();
      if (token) {
        await signIn(token);
        // Navigate after signing in. You may want to tweak this to ensure sign-in is
        // successful before navigating.
        // router.replace("/home");
      }
    } catch (error) {
      // Handle the error
    }
  };
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
          source={require("../../assets/images/logo2.png")}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.logoContainer}></View>
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
          // onChangeText={(email) => setEmail({ email })}
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
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          // onChangeText={(password) => setPassword({ password })}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        // onPress={() => showAlert("login")}
      >
        <Text
          onPress={() => {
            signIn();
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.push("/Main/Main");
          }}
          style={styles.loginText}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => showAlert("forgot password")}
      >
        <Text style={styles.text}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/register" style={styles.text}>
          Criar nova conta
        </Link>
      </TouchableOpacity>
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
  text: {
    color: "white",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 30,
  },
});
