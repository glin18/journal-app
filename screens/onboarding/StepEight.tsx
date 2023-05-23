import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "../../components/onboarding/Button";
import TopBar from "../../components/onboarding/TopBar";

const StepEight = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar step={8} />
      <Text style={styles.mainText}>You're All Set</Text>
      <Text style={styles.secondaryText}>
        Congratulations on successfully setting up your account.{" "}
        <Text style={styles.bold}>Dive in</Text> and start your journaling
        journey by creating your first entry.
      </Text>
      <Image
        style={styles.dolphin}
        source={require("../../assets/echodolphin.png")}
      />
      <Button>Start Journal</Button>
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
    marginBottom: "20%",
  },
  dolphin: {
    marginBottom: "20%",
    transform: [
      {
        rotate: "-240deg",
      },
    ],
  },
  bold: {
    fontWeight: "600",
  },
});

export default StepEight;
