import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import img1 from "../assets/Image/bg-image1.jpg";
import img2 from "../assets/Image/bg-image2.jpg";
import img3 from "../assets/Image/bg-image3.jpg";
import img4 from "../assets/Image/bg-image4.jpg";
import logo from "../assets/Image/logo.png";
import award from "../assets/Image/award.png";
import star from "../assets/Image/star.png";

import { useFonts } from "expo-font";

const Home = () => {
    const [fontsLoaded] = useFonts({
        Maisondeartisan: require("../assets/Fonts/MaisondeartisanfreeRegular-qZl52.otf"),
        QueensidesMedium: require("../assets/Fonts/QueensidesMedium-x30zV.ttf"),
        Swansea: require("../assets/Fonts/Swansea-q3pd.ttf"),

    });
    return (
        <View style={style.header}>
            <View style={style.home}>
                <Image source={img1} style={style.img1} />
                <Image source={img4} style={style.img1} />
                <Image source={img3} style={style.img1} />
                <Image source={img2} style={style.img1} />
            </View>
            <View style={style.logoImg}>
                <Image source={logo} style={style.logo} />
                <Text style={style.text}>Presents</Text>
            </View>
            <View style={style.container1}>
                <Text style={style.section2}>Professional Online</Text>
                <Text style={style.section2}>Makeup Course</Text>
                <View style={{display:'flex', flexDirection:'row', marginTop:10, gap:7}}>
                    <View style={style.section3}>
                        <Image style={{width:25, height:25}} source={award} />
                        <Text style={{color:'white'}}>Certification Programme</Text>
                    </View>
                    <View style={style.section4}>
                        <Image style={{width:18, height:18}} source={star} />
                        <Text style={{color:'#FFBF00', marginLeft:4}}>Rated 4.85/5</Text>
                    </View>
                </View>
                <View style={{marginTop:10, display:'flex', gap:7, flexDirection:'column'}}>
                    <Text style={style.text1}>✔️  India's No.1 Online Makeup Course</Text>
                    <Text style={style.text1}>✔️  Learn by LIVE Do-it-Together Classes</Text>
                    <Text style={style.text1}>✔️  Unlimited Practise Session to master skills</Text>
                </View>
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    home: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
    },
    img1: {
        width: 125,
        height: 150,
        opacity: 0.4,
    },
    logoImg: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top:0
    },
    logo: {
        width: 250,
        height: 150,
        objectFit: "cover",
    },
    text: {
        position: "absolute",
        top: 115,
        color: "white",
        letterSpacing: 3,
        fontFamily: "Maisondeartisan",
        fontWeight: "600",
    },
    container1:{
        position:'absolute',
        top:170,
        left:15

    },
    section2:{
        color:'white',
        fontSize:30,
        fontFamily:'QueensidesMedium'
    },
    section3:{
        backgroundColor:"rgba(255, 255, 255, 0.39)",
        paddingHorizontal:6,
        paddingVertical:4,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    section4:{
        paddingHorizontal:6,
        paddingVertical:4,
        display:'flex',
        flexDirection:'row',
        gap:3,
        alignItems:'center'
    },
    text1:{
        color:'white',
        fontFamily:'Swansea',
        
    }
});

export default Home;
