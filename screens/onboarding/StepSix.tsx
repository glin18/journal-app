import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepSix = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <Text style={styles.mainText}>Let's Enable Some Features</Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.bold}>Microphone Access:</Text> To record audio
        entries, we need access to your device's microphone. This allows you to
        express yourself in your own voice and capture the nuances of your
        thoughts.
      </Text>
      <Button>Enable Mic</Button>
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

export default StepSix;
