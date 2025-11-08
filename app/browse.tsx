import AppHeader from "@/components/appHeader";
import WelcomeText from "@/components/welcomeText";
import { Image, TouchableOpacity, View } from "react-native";
import { indexStyles } from "@/styles";
import Wallpapers from "@/components/wallpapers";
import { useState } from "react";
import { images } from "@/constants/images";

export default function Browse() {
    const [isGrid, setIsGrid] = useState(true)
    const grid = isGrid ? images.activeGrid : images.grid

    const [isList, setIsList] = useState(false)
    const list = isList ? images.activeList : images.list

    return (
        <View style={{ flex: 1 }}>
            <AppHeader page="browse" />

            <View style={indexStyles.mainView}>
                <WelcomeText page="browse" />

                <View style={indexStyles.subView}>
                    <View style={indexStyles.catView}>
                        <View></View>

                        <View style={indexStyles.iconView}>
                            <TouchableOpacity onPress={() => { if (isGrid === false) {setIsGrid(true) ; setIsList(false)}}} style={[indexStyles.iconTouch, isGrid && indexStyles.activeIconTouch]}>
                                <Image source={grid} style={indexStyles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { if (isList === false) {setIsList(true) ; setIsGrid(false)}}} style={[indexStyles.iconTouch, isList && indexStyles.activeIconTouch]}>
                                <Image source={list} style={indexStyles.icon2} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Wallpapers isList={isList} />
                </View>
            </View>

        </View>
    )
}
