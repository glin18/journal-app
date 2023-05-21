import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Log In</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Login;
