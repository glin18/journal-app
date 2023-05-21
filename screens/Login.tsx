import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.login}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#19242E"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#19242E"
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
    gap: 30,
  },
  login: {
    fontSize: 36,
    marginTop: "20%",
    marginBottom: "10%",
  },
  input: {
    padding: 15,
    width: "80%",
    height: 55,
    color: "#19242E",
    borderRadius: 7,
    backgroundColor: "#D9D9D9",
    shadowColor: "#19242E",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#071116",
    padding: 10,
    width: "65%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
});

export default Login;
