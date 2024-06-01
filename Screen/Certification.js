import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import photo from "../assets/Image/photos.png";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import certificate from "../assets/Image/certi.png"

const Certification = () => {
    const [fontsLoaded] = useFonts({
        Maisondeartisan: require("../assets/Fonts/MaisondeartisanfreeRegular-qZl52.otf"),
        QueensidesMedium: require("../assets/Fonts/QueensidesMedium-x30zV.ttf"),
        Swansea: require("../assets/Fonts/Swansea-q3pd.ttf"),
    });
    return (
        <View style={style.container}>
            <Image source={photo} style={style.imgContainer} />
            <View style={style.viewContainer}>
                <View style={{ width: "80%", paddingBottom:10 }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 25,
                            textAlign: "center",
                            fontFamily: "QueensidesMedium",
                        }}
                    >
                        Why Should You Join Airblack?
                    </Text>
                </View>
            </View>
            <View style={style.lineContainer1}></View>
            <View style={style.lineContainer2}></View>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 18,
                    position: "absolute",
                    top: 140,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        width: "28%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#ca3660",
                            width: 40,
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 50,
                            marginBottom: 10,
                        }}
                    >
                        <Icon name="video-wireless" style={style.iconContainer} />
                    </View>
                    <Text style={{ color: "white", textAlign: "center" }}>
                        Do-it-together, live on zoom
                    </Text>
                </View>
                <View
                    style={{
                        width: "28%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#ca3660",
                            width: 40,
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 50,
                            marginBottom: 10,
                        }}
                    >
                        <Icon name="star" style={style.iconContainer} />
                    </View>
                    <Text style={{ color: "white", textAlign: "center" }}>
                        4.8/5 Rated Classes
                    </Text>
                </View>
                <View
                    style={{
                        width: "28%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "#ca3660",
                            width: 40,
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 3,
                            borderRadius: 50,
                            marginBottom: 10,
                        }}
                    >
                        <Icon name="account-group" style={style.iconContainer} />
                    </View>
                    <Text style={{ color: "white", textAlign: "center" }}>
                        35000+ Members
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10, position:'absolute', top:270 }}>
                <TouchableOpacity style={style.button} onPress={this.onPress}>
                    <Text
                        style={{
                            color: "white",
                            fontFamily: "Swansea",
                            fontSize: 15,
                            letterSpacing: 0.5,
                        }}
                    >
                        Apply Now
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{display:'flex', alignItems:'center', marginTop:30, justifyContent:'center'}}>
                <View style={{ width: "60%", paddingBottom:10 }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 25,
                            textAlign: "center",
                            fontFamily: "QueensidesMedium",
                        }}
                    >
                        Get Certified From India's Biggest Beauty Platform
                    </Text>
                </View>
            </View>
            <View style={style.lineContainer3}></View>
            <View style={style.lineContainer4}></View>
            <Image source={certificate} style={{width:350, height:350}} />
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        marginVertical: 30,
        backgroundColor: "black",
    },
    imgContainer: {
        width: 375,
        height: 375,
        opacity: 0.3,
    },
    viewContainer: {
        position: "absolute",
        top: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    lineContainer1: {
        width: "15%",
        borderTopWidth: 2,
        borderBlockColor: "rgba(255, 26, 126, 1)",
        position: "absolute",
        left: 40,
        top: 80,
    },
    lineContainer2: {
        width: "15%",
        borderTopWidth: 2,
        borderBlockColor: "rgba(255, 26, 126, 1)",
        position: "absolute",
        right: 40,
        top: 80,
    },
    iconContainer: {
        color: "white",
        fontSize: 25,
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgba(255, 26, 126, 1)",
        padding: 10,
        borderRadius: 5,
        width:330
    },
    lineContainer3: {
        width: "15%",
        borderTopWidth: 2,
        borderBlockColor: "rgba(255, 26, 126, 1)",
        position: "absolute",
        left: 40,
        top: 460,
    },
    lineContainer4: {
        width: "15%",
        borderTopWidth: 2,
        borderBlockColor: "rgba(255, 26, 126, 1)",
        position: "absolute",
        right: 40,
        top: 460,
    },
});
export default Certification;
