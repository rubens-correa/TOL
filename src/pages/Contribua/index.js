import { StyleSheet, Text, View } from "react-native";

export default function Contribua() {
  return (
    <View style={styles.container}>
      <Text>Contribua Conosco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
