import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

const ErrorHandling = ({ errorMsg }) => {
  if (!errorMsg) return null;

  return <Text style={styles.errorText}>{errorMsg}</Text>;
};

export default ErrorHandling;
