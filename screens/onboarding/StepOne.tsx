import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepOne = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar step={1} />
      <Text style={styles.mainText}>Walkthrough Step 1</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Create Your Journal Entry:</Text> Tap on the
        "+" button to start your journal entry. Choose your mood, category, and
        input method (voice or written) to capture your thoughts with ease and
        authenticity.
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

export default StepOne;
