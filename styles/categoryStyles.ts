import { ScrollView, StyleSheet } from "react-native";
import { fonts } from "./globals";

export const categoryStyles = StyleSheet.create({
    leftV: {
        width: 611
    },
    
    backArrow: {
        width: 15.58,
        height: 15.17
    },

    headerView: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },

    headerTxt: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 20,
        color: "#979797"
    },

    scrollView: {
        paddingTop: 40,
    },

    subViewLeft: {
        // rowGap: 50
    },

    catName: {
        fontFamily: fonts.clashDisplayRegular,
        fontSize: 48,
        color: "#000000"
    },

    saveView: {
        position: "absolute",
        right: 15,
        top: 15,
        height: 40,
        width: 40,
        borderWidth: 0.5,
        borderRadius: 30,
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#eeeeee",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
    },

    listsaveView: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },

    saveImg: {
        height: 24,
        width: 24
    }
})

