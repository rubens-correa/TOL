import { StyleSheet, Text, View } from "react-native";

export default function Widgets() {
  return (
    <View style={styles.container}>
      <Text>Página de Widgets</Text>
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
