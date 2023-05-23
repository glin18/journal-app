import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepFour = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar step={4} />
      <Text style={styles.mainText}>Walkthrough Step 4</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Explore More: </Text> Dive deeper into
        EchoJournal by exploring features like customizing the appearance of
        your journal or leveraging the power of GPT for personalized responses,
        advice, and predictions.
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

export default StepFour;
