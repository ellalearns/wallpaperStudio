import { StyleSheet } from "react-native";
import { fonts } from "../globals";

export const appHeaderStyles = StyleSheet.create({
    main: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: 98,
        justifyContent: "space-between",
        paddingHorizontal: 47,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    name: {
        width: 185,
        height: 61,
        flexDirection: "row",
        padding: 20,
        gap: 8,
        alignItems: "center",   
    },

    nameImg: {
        width: 16,
        height: 16
    },

    nameTxt: {
        fontFamily: fonts.poppinsRegular,
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 1
    },

    buttonV: {
        width: 523,
        height: 44,
        flexDirection: "row",
        gap: 12
    }
})
