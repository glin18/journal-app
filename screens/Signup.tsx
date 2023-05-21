import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.dolphin}
        source={require("../assets/echodolphin.png")}
      />
      <Text style={styles.signup}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#19242E"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#19242E"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#19242E"
      />
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.horizontalLine} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require("../assets/google.png")} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <Text style={styles.agreeText}>
        By continuing, you agree to our{" "}
        <Text style={styles.bold}>Terms and Conditions</Text> and{" "}
        <Text style={styles.bold}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#859FAB",
    alignItems: "center",
    gap: 10,
  },
  signup: {
    fontSize: 36,
    marginTop: "25%",
    marginBottom: "12%",
  },
  input: {
    marginBottom: "5%",
    padding: 15,
    width: "80%",
    height: 55,
    color: "#19242E",
    borderRadius: 7,
    backgroundColor: "#D9D9D9",
    shadowColor: "#19242E",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  signupButton: {
    marginTop: "5%",
    backgroundColor: "#071116",
    padding: 10,
    width: "65%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: "7.5%",
  },
  orText: {
    color: "#666666",
    fontWeight: "400",
    fontSize: 18,
    fontFamily: "Helvetica Neue",
  },
  horizontalLine: {
    borderBottomColor: "#666666",
    borderBottomWidth: 1,
    width: "30%",
  },
  googleButton: {
    marginTop: "7.5%",
    backgroundColor: "#071116",
    padding: 10,
    width: "65%",
    height: 60,
    borderRadius: 15,
    flexDirection: "row",
    gap: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 13,
  },
  agreeText: {
    marginTop: "7%",
    textAlign: "center",
    fontSize: 10,
    width: "60%",
    fontWeight: "300",
    lineHeight: 18,
  },
  bold: {
    fontWeight: "600",
  },
  dolphin: {
    position: "absolute",
    left: "-20%",
    top: "2%",
    width: 190,
    height: 322,
  },
});

export default Signup;
