import { StyleSheet, Text, View } from "react-native";

export default function Midia() {
  return (
    <View style={styles.container}>
      <Text>Mídias</Text>
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
