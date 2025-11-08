import { images } from "@/constants/images";
import { appHeaderStyles } from "@/styles/componentStyles/appHeader";
import { Image, Text, View } from "react-native";
import NavButton from "./navButton";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export type AppHeaderProps = {
    page: "home" | "browse" | "favorites" | "settings"
}

export default function AppHeader ({ page } : AppHeaderProps) {

    return (
        <View style={appHeaderStyles.main}>
            <View style={appHeaderStyles.name}>
                <Image source={images.headerIcon} style={appHeaderStyles.nameImg} />
                <Text style={appHeaderStyles.nameTxt}>Wallpaper Studio</Text>
            </View>

            <View style={appHeaderStyles.buttonV}>
                <NavButton text="Home" focused={page === "home" ? true : false} img={images.home} onClick={() => router.push("/")} />
                <NavButton text="Browse" focused={page === "browse" ? true : false} img={images.browse} onClick={() => router.push("/browse")} />
                <NavButton text="Favorites" focused={page === "favorites" ? true : false} img={images.heart} onClick={() => router.push("/favorites")} />
                <NavButton text="Settings" focused={page === "settings" ? true : false} img={images.settings} onClick={() => router.push("/settings")} />
            </View>
        </View>
    )
}
