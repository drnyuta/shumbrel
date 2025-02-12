import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import Logo from "../../../assets/images/Logo-blue.svg";
import Arrow from "../../../assets/icons/right-arrow.svg";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/screens/onboarding/chooseService" style={styles.skipButton}>
        <View style={styles.skipButton}>
          <Text style={styles.skipText}>Skip registration</Text>
          <Arrow height={16} width={16} />
        </View>
      </Link>
      <View style={styles.wrapper}>
        <Logo style={styles.logo} width={200} height={200} />
        <Text style={styles.text}>Vacation is over?</Text>
        <Text style={styles.text}>Let Your Umbrella Keep Traveling</Text>
      </View>
      <View style={styles.wrapper}>
        <Link href={"screens/(auth)/sign-up"} style={styles.registerButton}>
          <Text style={styles.text}>Register</Text>
        </Link>
        <Text style={styles.text}>
          Already have an account?{" "}
          <Link
            style={[styles.text, { color: "#2385AF" }]}
            href={"screens/(auth)/sign-in"}
          >
            Sign in
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "#E3F5FC",
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter-Medium",
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
    justifyContent: "flex-end",
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
};

export default Welcome;
