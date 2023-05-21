import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";

const StepZero = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/woman.png")} />
      <Text style={styles.mainText}>
        EchoJournal is the ultimate AI powered journaling app
      </Text>
      <Text style={styles.secondaryText}>
        Seamlessly record and transcribe voice memos, track your progress, set
        goals, and embark on a transformative journey to improve your
        well-being. Press Next to find out how.
      </Text>
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
  },
  secondaryText: {
    fontWeight: "400",
    fontSize: 16,
    width: "75%",
  },
});

export default StepZero;
