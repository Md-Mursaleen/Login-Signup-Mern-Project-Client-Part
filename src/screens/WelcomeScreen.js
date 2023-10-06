import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/pattern.png")} style={styles.backgroundImageStyle} />
            <View style={styles.subContainer}>
                <Image source={require("../../assets/welcomelogo.png")} style={styles.logoImageStyle} />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginTop: 150,
        height: 300,
        width: 300,
        alignSelf: "center",
        resizeMode: "contain"
    },
    bottomContainer: {
        marginBottom: 150,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    buttonContainer: {
        padding: 14,
        marginTop: 35,
        width: "65%",
        marginHorizontal: 10,
        backgroundColor: "#f50057",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "500",
        color: "white"
    }
});