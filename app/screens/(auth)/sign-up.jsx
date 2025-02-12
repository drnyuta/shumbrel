import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { loginWithGoogle } from "../../services/AuthService";

import Logo from "../../../assets/images/Logo-blue.svg";
import Arrow from "../../../assets/icons/right-arrow.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Google from "../../../assets/icons/google.svg";

const SignUp = () => {
  const handleGoogleLogin = async () => {
    console.log("Google login"); // DELETE
    try {
      await loginWithGoogle();
      router.replace("/screens/(tabs)/map");
    } catch (error) {
      Alert.alert("Google login failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlay} />

      <Text href="/screens/onboarding/chooseService" style={styles.skipButton}>
        <View style={styles.skipButton}>
          <Text style={styles.skipText}>Skip registration</Text>
          <Arrow height={16} width={16} />
        </View>
      </Text>

      <View style={styles.wrapper}>
        <Logo style={styles.logo} width={200} height={200} />
        <Text style={styles.text}>Vacation is over?</Text>
        <Text style={styles.text}>Let Your Umbrella Keep Traveling</Text>
      </View>

      <View style={styles.wrapper}>
        <Text href={"screens/(auth)/sign-up"} style={styles.registerButton}>
          <Text
            style={{ color: "#000", fontSize: 16, fontFamily: "Inter-Medium" }}
          >
            Register
          </Text>
        </Text>
        <Text style={styles.text}>
          Already have an account?{" "}
          <Text
            style={[styles.text, { color: "#2385AF" }]}
            href={"/(auth)/sign-in"}
          >
            Sign in
          </Text>
        </Text>
      </View>
      <View style={styles.signUpForm}>
        <View style={styles.signupContainer}>
          <Text
            style={[{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }]}
          >
            Sign up
          </Text>
          <View style={styles.signupField}>
            <Facebook style={styles.icon} />
            <Text style={styles.text}>Continue with Facebook</Text>
          </View>
          <TouchableOpacity style={styles.signupField} onPress={handleGoogleLogin}>
            <Google style={styles.icon} />
            <Text style={styles.text}>Continue with Google</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Or continue with{" "}
            <Link
              href={"screens/(auth)/emailRegistration"}
              style={[{ fontWeight: "bold", textDecorationLine: "underline" }]}
            >
              email
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    paddingBottom: 50,
    backgroundColor: "#E3F5FC",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    color: "#000",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginLeft: 30,
  },
  skipButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
    marginRight: 10,
    color: "#000",
  },
  registerButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#DCDCDC",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signUpForm: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    zIndex: 2,
  },
  signupField: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderColor: "#DCDCDC",
    borderWidth: 0.5,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  signupContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingVertical: 20,
  },
  signupButton: {
    backgroundColor: "#2385AF",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#DCDCDC",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SignUp;
