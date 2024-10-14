import { View, Text } from "react-native";
import InboxIcon from "../../assets/icons/inbox.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Inbox = () => {
  isAuthorized = false;
  isInboxEmpty = true;

  return isAuthorized === false || isInboxEmpty === true ? (
    <SafeAreaView
      height="100%"
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E3F5FC",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Inter",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Here you will see your messages
      </Text>
      <InboxIcon />
    </SafeAreaView>
  ) : (
    <View>
      <Text>Inbox</Text>
    </View>
  );
};

export default Inbox;
