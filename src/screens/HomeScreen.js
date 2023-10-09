import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/pattern.png")} style={styles.backgroundImageStyle} />
            <View style={styles.subContainer}>
                <Image source={require("../../assets/welcomelogo.png")} style={styles.logoImageStyle} />
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Login Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4"
    },
    backgroundImageStyle: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1
    },
    subContainer: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    logoImageStyle: {
        marginTop: 50,
        height: 300,
        width: 300,
        alignSelf: "center",
        resizeMode: "contain"
    },
    buttonContainer: {
        padding: 12,
        marginBottom: 150,
        width: "80%",
        marginHorizontal: 10,
        backgroundColor: "#f50057",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "500",
        color: "white"
    }
});