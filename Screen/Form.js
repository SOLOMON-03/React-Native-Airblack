import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import Dropdown from "../Components/Dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profession = [
  { title: "Frontend Developer" },
  { title: "Software Developer" },
  { title: "Backend Developer" },
  { title: "Student" },
];
const Goal = [{ title: "Makeup Artist" }, { title: "Beautician" }];
const city = [
  { title: "Chennai" },
  { title: "Coimbatore" },
  { title: "Madurai" },
];
const phone = [{ title: "+302" }, { title: "+61" }, { title: "+03" }];

const Form = () => {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("../assets/Fonts/MontserratBold-p781R.otf"),
    Swansea: require("../assets/Fonts/Swansea-q3pd.ttf"),
  });
  return (
    <View style={style.container}>
      <Text style={style.heading}>FILL THE FORM BELOW TO ENQUIRE</Text>
      <View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: "Swansea", fontWeight: "700" }}>
            *Enter your name
          </Text>
          <TextInput
            placeholder="Eg. Solomon"
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: 340,
              padding: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: "Swansea", fontWeight: "700" }}>
            *Enter your WhatsApp Number
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Dropdown type={phone} width={90} placeholder={'+91'} />
            <TextInput
              placeholder="Eg. 98564 63001"
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 240,
                padding: 5,
                marginTop: 10,
              }}
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: "Swansea", fontWeight: "700" }}>
            *Select your Profession
          </Text>
          <Dropdown type={Profession} width={340} placeholder={'Choose the most relevant option'}/>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: "Swansea", fontWeight: "700" }}>
            *Select your Goal
          </Text>
          <Dropdown type={Goal} width={340} placeholder={'Choose the most relevant option'}/>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontFamily: "Swansea", fontWeight: "700" }}>
            *Select your city
          </Text>
          <Dropdown type={city} width={340} placeholder={'Choose the most relevant option'}/>
        </View>
        <View style={{ padding: 10 }}>
          <TouchableOpacity style={style.button} onPress={this.onPress}>
            <Text
              style={{
                color: "white",
                fontFamily: "Swansea",
                fontSize: 18,
                fontWeight: "700",
                letterSpacing: 0.5,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 10,
  },
  heading: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "rgba(255, 26, 126, 1)",
    width: "100%",
    textAlign: "center",
    padding: 5,
    color: "white",
    fontFamily: "MontserratBold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(255, 26, 126, 1)",
    padding: 10,
    borderRadius: 5,
  },
});
export default Form;
