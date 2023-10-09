import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

const SignupScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#f4f4f4");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        dob: "",
        password: "",
        confirmpassword: ""
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const onPressSignup = () => {
        if (userdata.name == "" || userdata.email == "" || userdata.password == "" || userdata.confirmpassword == "" || userdata.dob == "") {
            setErrorMessage("All fields are required");
            return;
        }
        else {
            if (userdata.password != userdata.confirmpassword) {
                setErrorMessage("Password and Confirm Password must be same");
                return;
            }
            else {
                fetch("http://192.168.0.110:3000/verify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userdata)
                }).then((response) => response.json()).then(data => {
                    if (data.error === "Invalid Credentials") {
                        setErrorMessage("Invalid Credentials")
                    }
                    else if (data.message === "Verification Code Sent to your Email") {
                        alert(data.message);
                        navigation.navigate("Verification", { userdata: data.userdata })
                    }
                });
            }
        }
    };
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/pattern.png")} style={styles.backgroundImageStyle} />
            <ScrollView style={styles.bottomContainer}>
                <Text style={styles.loginTextStyle}>Create a New Account</Text>
                <View style={[styles.accountContainer, { marginTop: 15 }]}>
                    <Text style={[styles.accountText, { color: "#a7a7a7" }]}>Already Registered?</Text>
                    <Text style={[styles.accountText, { color: "#f50057" }]} onPress={() => navigation.navigate("Login")}>Login Here</Text>
                </View>
                {errorMessage ? <Text style={styles.errorMessageTextStyle}>{errorMessage}</Text> : null}
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Name</Text>
                    <TextInput placeholder="Enter your name"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserdata({ ...userdata, name: value })}
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Email</Text>
                    <TextInput placeholder="Enter your email"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserdata({ ...userdata, email: value })}
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Date of Birth</Text>
                    <TextInput placeholder="Enter your Date of Birth"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserdata({ ...userdata, dob: value })}
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Password</Text>
                    <TextInput placeholder="Enter your password"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserdata({ ...userdata, password: value })}
                        secureTextEntry={true}
                        style={styles.textInputStyle} />
                </View>
                <View style={styles.formItemContainer}>
                    <Text style={styles.labelStyle}>Confirm Password</Text>
                    <TextInput placeholder="Confirm your password"
                        placeholderTextColor="black"
                        onPressIn={() => setErrorMessage(null)}
                        onChangeText={(value) => setUserdata({ ...userdata, confirmpassword: value })}
                        secureTextEntry={true}
                        style={styles.textInputStyle} />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onPressSignup()}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default SignupScreen;

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
    bottomContainer: {
        marginTop: 95,
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
        marginBottom: 15,
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