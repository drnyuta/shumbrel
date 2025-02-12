import React, { useState, useEffect } from "react";
import { SafeAreaView, TextInput, View, StyleSheet, Text } from "react-native";
import { useRouter, Link } from "expo-router";
import { debounce } from "lodash";

import LeftArrow from "../../../assets/icons/left-arrow.svg";
import Pin from "../../../assets/icons/PinIcon.svg";
import Logo from "../../../assets/images/Logo-blue.svg";
import Magnifier from "../../../assets/icons/magnifier.svg";

import {
  getCurrentLocation,
  fetchLocationSuggestions,
} from "../../services/GeolocationService";
import LocationSuggestions from "../../components/LocationSuggestionsList";
import ErrorHandling from "../../services/ErrorHandling";

const Geolocation = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCurrentLocation = () => {
      getCurrentLocation().then((location) => {
        if (location) {
          const locationString = `${location.latitude}, ${location.longitude}`;
          setInputValue(locationString);
          handleRedirect();
        }
      });
    };

    fetchCurrentLocation();
  }, []);

  const debouncedFetchSuggestions = debounce(async (text) => {
    try {
      const suggestions = await fetchLocationSuggestions(text);
      setSuggestions(suggestions);
      setErrorMsg(null);
    } catch (error) {
      setSuggestions([]);
      setErrorMsg(error.message);
    }
  }, 500);

  const handleInputChange = (text) => {
    setInputValue(text);
    debouncedFetchSuggestions(text);
  };

  const handleLocationSelect = (location) => {
    setInputValue(location.description);
    setSuggestions([]);
    handleRedirect();
  };

  const handleRedirect = () => {
    router.push("screens/onboarding/confirmation");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Link href={"screens/onboarding/chooseService"}>
        <LeftArrow />
      </Link>
      <View style={styles.wrapper}>
        <Pin />
        <Text style={[styles.text, { marginTop: 40 }]}>
          Let us know where you are, so we can find the best options for you
        </Text>
        <View style={styles.inputContainer}>
          <Magnifier style={styles.icon} />
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter city, country"
          />
        </View>

        <ErrorHandling errorMsg={errorMsg} />

        {suggestions.length > 0 && (
          <LocationSuggestions
            suggestions={suggestions}
            onLocationSelect={handleLocationSelect}
          />
        )}
      </View>
      <Logo style={{ alignSelf: "center" }} height={100} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "#E3F5FC",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    textAlign: "center",
  },
  inputContainer: {
    width: 250,
    position: "relative",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    paddingLeft: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C3C3C3",
  },
  icon: {
    position: "absolute",
    left: 15,
    top: 18,
    zIndex: 1,
  },
});

export default Geolocation;
