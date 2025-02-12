import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "AIzaSyBT8jkGjF1ouQu-9KkODUqlc9Q2wp-QUBI";
export const getCurrentLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return null;
  }

  const locationData = await Location.getCurrentPositionAsync({});
  return locationData.coords;
};

export const fetchLocationSuggestions = async (query) => {
  if (query.trim() === "") return [];

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input: query,
          key: API_KEY,
        },
      }
    );

    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("No locations found. Please try again.");
    }
  } catch (error) {
    throw new Error("No locations found. Please try again.");
  }
};
