import { StyleSheet } from "react-native";
import { fonts } from "../globals";

export const welcomeTxtStyles = StyleSheet.create({
    view: {
        gap: 8,
        width: 870
    },

    txt: {
        width: "100%",
        fontFamily: fonts.poppinsRegular,
        fontSize: 24,
        lineHeight: 24,
        color: "#575757"
    },

    img: {
        width: "100%",
        height: 60,
        resizeMode: "contain"
    }
})
