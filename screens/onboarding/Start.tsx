import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Start = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/echodolphin.png")} />
      <Text style={styles.welcomeText}>Welcome to EchoJournal</Text>
      <Text>Reflect. Grow. Thrive</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
  },
  welcomeText: {
    fontWeight: "400",
    fontSize: 24,
  },
  mottoText: {
    fontWeight: "400",
    fontSize: 15,
  },
  button: {
    backgroundColor: "black",
    padding: 12,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
});

export default Start;
