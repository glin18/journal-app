import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepTwo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Text style={styles.mainText}>Walkthrough Step 2</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Record Audio:</Text> Express yourself freely
        by tapping the microphone icon. EchoJournal will capture your voice and
        let you listen to your entries later for deeper reflection and
        self-discovery.
      </Text>
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
    marginBottom: "40%",
  },
  bold: {
    fontWeight: "600",
  },
});

export default StepTwo;
