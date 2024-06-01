import { useFonts } from 'expo-font';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Dropdown = ({type, width, placeholder}) => {
    const [fontsLoaded] = useFonts({
        Swansea: require("../assets/Fonts/Swansea-q3pd.ttf"),
      });
    return (
        <SelectDropdown
            data={type}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={{width:width}}>
                    <View style={styles.dropdownButtonStyle}>
                        <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || placeholder}
                        </Text>
                        <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                    </View>
                    </View>
                );
            }}
            renderItem={(item, index, isSelected) => {
                return (
                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: 'rgba(255, 26, 126, 1)' }) }}>
                        <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    );
}
const styles = StyleSheet.create({
    dropdownButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "grey",
        padding: 5,
        marginTop: 10,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 14,
        color: '#151E26',
        fontFamily:'Swansea'
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 14,
        color: '#151E26',
        fontFamily:'Swansea'
    },
    dropdownItemIconStyle: {
        fontSize: 20,
        marginRight: 8,
    },
});
export default Dropdown