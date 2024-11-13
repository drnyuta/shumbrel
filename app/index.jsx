import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to the App</Text>
      <Link href="/(tabs)/map">Go to Map</Link>
    </SafeAreaView>
  );
};

export default Welcome;
