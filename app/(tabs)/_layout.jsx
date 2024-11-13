import { Tabs } from "expo-router";
import icons from "../../assets/icons";
import TabIcon from "../components/TabIcon";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: "#A7A7A7",
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Map"
              focused={focused}
              icon={icons.map}
              size={30}
              mt={-1}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          headerShown: false,
          title: "Inbox",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Inbox"
              focused={focused}
              icon={icons.inbox}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: "Account",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="Account"
              focused={focused}
              icon={icons.account}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
