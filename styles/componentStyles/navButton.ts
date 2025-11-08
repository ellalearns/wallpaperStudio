import { StyleSheet } from "react-native";
import { fonts } from "../globals";

export const navButtonStyles = StyleSheet.create({
    main: {
        flexDirection: "row",
        height: 44,
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: "center",
    },

    img: {
        height: 24,
        width: 24
    },

    txt: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 14,
        color: "#000000",
        lineHeight: 14
    },

    focused: {
        backgroundColor: "#f5f5f5",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 12
    }
})
