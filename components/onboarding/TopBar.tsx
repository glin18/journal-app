import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/arrow-left.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>skip</Text>
        </TouchableOpacity>
      </View>
      <Text>TopBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TopBar;
