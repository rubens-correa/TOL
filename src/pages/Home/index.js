import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight;
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.AtentNews}>
          <Text>Notícias ou Imagens</Text>
        </View>
        <View style={styles.TierNews}>
          <Text>Notícias ou Imagens</Text>
        </View>
        <View style={styles.TierNews}>
          <Text>Notícias ou Imagens</Text>
        </View>
        <View style={styles.TierNews}>
          <Text>Notícias ou Imagens</Text>
        </View>
        <View style={styles.EndNews}>
          <Text>Notícias ou Imagens</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
  },
  AtentNews: {
    alignSelf: "center",
    flex: 1,
    width: "98%",
    height: 400,
    marginBottom: 20,
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  TierNews: {
    alignSelf: "center",
    flex: 1,
    width: "98%",
    height: 100,
    marginBottom: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  EndNews: {
    alignSelf: "center",
    flex: 1,
    width: "98%",
    height: 200,
    marginBottom: 10,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
