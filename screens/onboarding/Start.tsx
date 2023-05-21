import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Start = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.dolphin}
        source={require("../../assets/echodolphin.png")}
      />
      <View style={styles.textView}>
        <Text style={styles.welcomeText}>Welcome to EchoJournal</Text>
        <Text>Reflect. Grow. Thrive.</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dolphin: {
    marginTop: "20%",
  },
  textView: {
    marginTop: "25%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  welcomeText: {
    fontWeight: "400",
    fontSize: 24,
  },
  mottoText: {
    fontWeight: "400",
    fontSize: 15,
    fontFamily: "arimo",
  },
  button: {
    marginTop: "40%",
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

export default Start;
