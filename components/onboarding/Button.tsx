import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 12,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
});

export default Button;
