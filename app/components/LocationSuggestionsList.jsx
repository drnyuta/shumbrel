import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  suggestionsContainer: {
    width: 250,
    maxHeight: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C3C3C3",
    position: "absolute",
    top: 40,
    zIndex: 2,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C3C3C3",
  },
  suggestionText: {
    fontSize: 14,
  },
});

const LocationSuggestions = ({ suggestions, onLocationSelect }) => {
  return (
    <View style={styles.suggestionsContainer}>
      <FlatList
        data={suggestions}
        keyExtractor={(item, index) => item.place_id + index}
        renderItem={({ item }) => (
          <View
            style={styles.suggestionItem}
            onTouchEnd={() => onLocationSelect(item)}
          >
            <Text style={styles.suggestionText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LocationSuggestions;
