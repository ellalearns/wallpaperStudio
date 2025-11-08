import { navButtonStyles } from "@/styles/componentStyles/navButton";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type NavButtonProps = {
    text: string,
    img: any,
    focused: boolean,
    onClick: (value: any) => void
}

export default function NavButton ({ text, img, focused, onClick } : NavButtonProps) {

    return (
        <TouchableOpacity onPress={onClick} style={[navButtonStyles.main, focused && navButtonStyles.focused]}>
            <Image source={img} style={navButtonStyles.img} />
            <Text style={navButtonStyles.txt}>{text}</Text>
        </TouchableOpacity>
    )
}

