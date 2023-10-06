import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
            <View style={styles.bottomContainer}>
                <Text style={styles.loginTextStyle}>Create a New Account</Text>
                <View style={[styles.accountContainer, { marginTop: 15 }]}>
                    <Text style={[styles.accountText, { color: "#a7a7a7" }]}>Already Registered?</Text>
                    <Text style={[styles.accountText, { color: "#f50057" }]} onPress={() => navigation.navigate("Login")}>Login Here</Text>
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Name</Text>
                    <TextInput placeholder="Enter your name"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput placeholder="Enter your email"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Date of Birth</Text>
                    <TextInput placeholder="Enter your Date of Birth"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput placeholder="Enter your password"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Confirm Password</Text>
                    <TextInput placeholder="Confirm your password"
                        placeholderTextColor="black"
                        style={styles.textInputStyle} />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
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
    bottomContainer: {
        // marginTop: 80,
        // paddingBottomBottom: 80,
        marginTop: "auto",
        height: "88%",
        backgroundColor: "#f4f4f4",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    loginTextStyle: {
        marginTop: 10,
        fontSize: 42,
        fontWeight: "600",
        color: "black",
        textAlign: "center"
    },
    accountContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    accountText: {
        marginLeft: 3,
        marginRight: 3,
        fontSize: 16,
        fontWeight: "600"
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
    buttonContainer: {
        padding: 12,
        marginTop: 25,
        // marginBottom: 10,
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