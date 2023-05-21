import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";

const Start = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/echodolphin.png")} />
      <Text style={styles.welcomeText}>Welcome to EchoJournal</Text>
      <Text>Reflect. Grow. Thrive</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
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
});

export default Start;
