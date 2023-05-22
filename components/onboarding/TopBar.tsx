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
          <Text style={styles.skip}>skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stepBarContainer}>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
        <View style={styles.stepBar}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    gap: 15,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skip: {
    fontSize: 15,
    fontWeight: "400",
  },
  stepBar: {
    height: 6,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
  },
  stepBarActive: {
    height: 6,
    width: 30,
    borderRadius: 15,
    backgroundColor: "black",
  },
  stepBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
});

export default TopBar;
