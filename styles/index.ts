import { StyleSheet } from "react-native";
import { fonts } from "./globals";

export const indexStyles = StyleSheet.create({
    mainView: {
        paddingTop: 50,
        paddingHorizontal: 50,
        flex: 1
    },

    subView: {
        paddingTop: 50,
        gap: 8,
        flex: 1
    },

    catView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 25
    },

    header: {
        fontFamily: fonts.poppinsMedium,
        fontSize: 32,
        lineHeight: 32,
        letterSpacing: 0,
        color: "#000000"
    },

    aside: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 24,
        lineHeight: 24,
        color: "#575757"
    },

    wallpaperGroupView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        rowGap: 40,
        justifyContent: 'space-between'
    },

    wallpaperView: {
        width: 436,
        height: 291
    },

    textView: {
        position: "absolute",
        bottom: 25,
        left: 25
    },

    wallpaperName: {
        fontFamily: fonts.poppinsSemiBold,
        fontSize: 24, 
        lineHeight: 24,
        color: "#ffffff"
    },

    wallpaperDesc: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 16,
        lineHeight: 16,
        color: "#ffffff",
        marginTop: 8
    },

    wallpaperNum: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 14, 
        lineHeight: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "#eeeeee",
        color: "#ffffff",
        width: 115,
        borderRadius: 30,
        marginTop: 8
    },

    imgStyle: {
        borderRadius: 30
    },

    scrollView: {
        paddingBottom: 50,
    }
})
