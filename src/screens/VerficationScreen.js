import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

const VerficationScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#f4f4f4");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);
    const route = useRoute();
    const { userdata } = route.params;
    const [errorMessage, setErrorMessage] = useState(null);
    const [userCode, setUserCode] = useState("XXXX");
    const [actualCode, setActualCode] = useState(null);
    useEffect(() => {
        setActualCode(userdata[0]?.verificationCode);
    }, []);
    const onPressVerify = () => {
        if (userCode == "XXXX" || userCode == "") {
            setErrorMessage("Please enter the code");
            return;
        }
        else if (userCode == actualCode) {
            const userData = {
                name: userdata[0]?.name,
                dob: userdata[0]?.dob,
                email: userdata[0]?.email,
                password: userdata[0]?.password
            }
            fetch("http://192.168.0.110:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }).then(res => res.json()).then(data => {
                if (data.message === "User Registered Successfully") {
                    alert(data.message);
                    navigation.navigate("Login");
                }
                else {
                    alert("Something went wrong! Try Signing Up Again");
                }
            });
        }
        else if (userCode != actualCode) {
            setErrorMessage("Incorrect code");
            return;
        }
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Image source={require("../../assets/pattern.png")} style={styles.backgroundImageStyle} />
            <View style={styles.headerContainer}>
                <Image source={require("../../assets/mainlogo.png")} style={styles.logoImageStyle} />
                <Text style={styles.titleStyle}>used2, Inc.</Text>
                <Text style={styles.subTitleStyle}>Buying and Selling Online</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.loginTextStyle}>Verification</Text>
                <Text style={styles.textStyle}>Verify your account</Text>
                {errorMessage ? <Text style={styles.errorMessageTextStyle}>{errorMessage}</Text> : null}
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.labelStyle}>Verification Code</Text>
                    <TextInput placeholder="Enter 6 digit Verification Code"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserCode(value)}
                        style={styles.textInputStyle} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onPressVerify()}>
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
                <View style={styles.accountContainer}>
                    <Text style={[styles.accountText, { color: "#a7a7a7" }]}>Don't have an account?</Text>
                    <Text style={[styles.accountText, { color: "#f50057" }]} onPress={() => navigation.navigate("Signup")}>Create a new account</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default VerficationScreen;

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
    headerContainer: {
        marginTop: 70
    },
    logoImageStyle: {
        marginTop: 65,
        width: 260,
        height: 270,
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
        height: "42%",
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
    textStyle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#a7a7a7",
        textAlign: "center"
    },
    errorMessageTextStyle: {
        padding: 5,
        marginTop: 15,
        marginHorizontal: 35,
        backgroundColor: "#f50057",
        fontSize: 15,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
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
        marginTop: 30,
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