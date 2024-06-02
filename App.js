import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import Home from "./Screen/Home";
import Form from "./Screen/Form";
import Certification from "./Screen/Certification";
import Community from "./Screen/Community";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Home />
        <Form />
        <Certification />
        <Community />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
