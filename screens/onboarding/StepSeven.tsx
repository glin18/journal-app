import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepSeven = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Text style={styles.mainText}>Almost Done</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Notifications: </Text> Stay engaged and
        motivated with personalized reminders and helpful notifications tailored
        to your journaling practice.
      </Text>
      <Button>Get Notifications</Button>
      <Text>Do Not Allow</Text>
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
    marginBottom: "95%",
  },
  bold: {
    fontWeight: "600",
  },
});

export default StepSeven;
