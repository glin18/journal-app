import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepThree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar step={3} />
      <Text style={styles.mainText}>Walkthrough Step 3</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Save, Try, or Delete: </Text> After creating
        your entry, save it to build your personal journal archive, try adding
        tags and titles to organize your entries, or delete it if you change
        your mind.
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

export default StepThree;
