import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

const LoginScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#f4f4f4");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Image source={require("../../assets/pattern.png")} style={styles.backgroundImageStyle} />
            <View style={styles.headerContainer}>
                <Image source={require("../../assets/mainlogo.png")} style={styles.logoImageStyle} />
                <Text style={styles.titleStyle}>used2, Inc.</Text>
                <Text style={styles.subTitleStyle}>Buying and Selling Online</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.loginTextStyle}>Login</Text>
                <Text style={styles.textStyle}>Sign in to continue</Text>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput placeholder="Enter a email"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput placeholder="Enter a password"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <Text style={styles.passwordText}>Forgot Password?</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login In</Text>
                </TouchableOpacity>
                <View style={styles.accountContainer}>
                    <Text style={[styles.accountText, { color: "#a7a7a7" }]}>Don't have an account?</Text>
                    <Text style={[styles.accountText, { color: "#f50057" }]} onPress={() => navigation.navigate("Signup")}>Create a new account</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

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
    headerContainer: {
        marginTop: 70
    },
    logoImageStyle: {
        width: 260,
        height: 260,
        alignSelf: "center",
        resizeMode: "contain"
    },
    titleStyle: {
        marginTop: -95,
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    subTitleStyle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    bottomContainer: {
        marginTop: "auto",
        height: "55%",
        backgroundColor: "#f4f4f4",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    loginTextStyle: {
        marginTop: 10,
        fontSize: 45,
        fontWeight: "600",
        color: "black",
        textAlign: "center"
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#a7a7a7",
        textAlign: "center"
    },
    formItemContainer: {
        flexDirection: "column"
    },
    labelStyle: {
        marginTop: 15,
        marginLeft: 45,
        fontSize: 15,
        fontWeight: "500",
        color: "#f50057"
    },
    textInputStyle: {
        padding: 12,
        marginTop: 8,
        marginHorizontal: 35,
        backgroundColor: "#ffb0cc",
        fontSize: 15,
        fontWeight: "400",
        borderRadius: 30,
        borderColor: "#f50057",
        borderWidth: StyleSheet.hairlineWidth
    },
    passwordText: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 40,
        fontSize: 15,
        fontWeight: "600",
        color: "#f50057"
    },
    buttonContainer: {
        padding: 12,
        marginTop: 20,
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
    },
    accountContainer: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    accountText: {
        marginLeft: 3,
        marginRight: 3,
        fontSize: 16,
        fontWeight: "600"
    }
});