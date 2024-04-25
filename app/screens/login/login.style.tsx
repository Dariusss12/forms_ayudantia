import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    content:{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black"
    },
    view:{
        width: "80%"
    },
    card:{
        backgroundColor: "white"
    },
    title:{
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: "10%"
    },
    cardButton: {
        backgroundColor: "black",
        marginVertical: "10%"
    },
    textInput:{
        backgroundColor: "white",       
    },
    errorMessage:{
        color: "red"
    }
})