import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepFive = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Text style={styles.mainText}>Make it Yours</Text>
      <Text style={styles.secondaryText}>Choose Your Theme: </Text>
      <Text style={styles.secondaryText}>Adjust Font Size: </Text>
      <Button>Next</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },
  mainText: {
    fontWeight: "400",
    fontSize: 24,
    width: "80%",
    textAlign: "center",
  },
  secondaryText: {
    fontWeight: "400",
    fontSize: 16,
    width: "75%",
    textAlign: "center",
  },
  bold: {
    fontWeight: "600",
  },
});

export default StepFive;
