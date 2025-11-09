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

    subView: {
        flexDirection: "row",
        justifyContent: "space-around"
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
    },

    rightV: { 
        width: 661, 
        borderRadius: 16, 
        padding: 40,
        justifyContent: "space-between",
        height: 746
    },

    wholePreviewV: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    previewSub: {
        justifyContent: "space-between",
        width: 279,
        minHeight: 300,
        maxHeight: 500
    },

    previewT: {
        fontFamily: fonts.poppinsSemiBold,
        fontSize: 32,
        color: "#000000",
    },

    label: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 14,
        color: "#808080"
    },

    currentName: {
        fontFamily: fonts.poppinsMedium,
        fontSize: 24,
        color: "#000000"
    },

    midV: {
        height: 330,
        justifyContent: "space-evenly"
    },

    iconTouch: { 
        width: 40, 
        height: 40, 
        backgroundColor: "rgba(124, 124, 124, 0.1)", 
        borderRadius: 11, 
        gap: 16, 
        padding: 6.53, 
        justifyContent: "center", 
        alignItems: "center", 
        borderWidth: 0.5, 
        borderColor: "#e5e5e5"
    },

    actionTouch: { 
        width: 200, 
        height: 50, 
        borderWidth: 1, 
        padding: 10, 
        gap: 10, 
        borderRadius: 21, 
        borderColor: "#dfdfdf", 
        backgroundColor: "#f8f8f8", 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "row"
    }
})

