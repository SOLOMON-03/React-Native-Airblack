import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import photo from "../assets/Image/photos.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Community = () => {
    return (
        <View style={style.container}>
            <Image source={photo} style={style.imgContainer} />
            <View style={style.viewContainer}>
                <View style={{ width: "80%", paddingBottom: 10 }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 25,
                            textAlign: "center",
                            fontFamily: "QueensidesMedium",
                        }}
                    >
                        Join our growing community of 35,000+ alumini
                    </Text>
                </View>
            </View>
            <View style={{ position:'absolute', top:200 }}>
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
            <View style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:10, position:'absolute', bottom:60}}>
                <Icon name='instagram' style={style.iconContainer} />
                <Icon name='facebook' style={style.iconContainer} />
                <Icon name='linkedin' style={style.iconContainer} />
                <Icon name='twitter' style={style.iconContainer} />
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
    },
    imgContainer: {
        width: 375,
        height: 375,
        opacity: 0.3,
    },
    viewContainer: {
        position: "absolute",
        top: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgba(255, 26, 126, 1)",
        padding: 10,
        borderRadius: 5,
        width:330
    },
    iconContainer:{
        color:'white',
        fontSize:40
    }
});
export default Community;
