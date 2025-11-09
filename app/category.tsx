import AppHeader from "@/components/appHeader";
import Wallpapers from "@/components/wallpapers";
import { images } from "@/constants/images";
import { indexStyles } from "@/styles";
import { categoryStyles } from "@/styles/categoryStyles";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Category() {

    const { category } = useLocalSearchParams()
    if (!category) return null

    const categoryName = category.toString()

    const [isGrid, setIsGrid] = useState(true)
    const grid = isGrid ? images.activeGrid : images.grid

    const [isList, setIsList] = useState(false)
    const list = isList ? images.activeList : images.list

    return (
        <View style={{ flex: 1 }}>
            <AppHeader page="browse" />

            <ScrollView style={categoryStyles.scrollView}>
                <View style={categoryStyles.subViewLeft}>
                    <View style={categoryStyles.leftV}>
                        <TouchableOpacity style={categoryStyles.headerView}>
                            <Image source={images.backArrow} style={categoryStyles.backArrow} />
                            <Text style={categoryStyles.headerTxt}>Back to Categories</Text>
                        </TouchableOpacity>
                        <View>
                            <View style={[indexStyles.catView, { paddingTop: 50 }]}>
                                <Text style={categoryStyles.catName}>{category}</Text>
                                <View>
                                    <View style={indexStyles.iconView}>
                                        <TouchableOpacity onPress={() => { if (isGrid === false) { setIsGrid(true); setIsList(false) } }} style={[indexStyles.iconTouch, isGrid && indexStyles.activeIconTouch]}>
                                            <Image source={grid} style={indexStyles.icon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { if (isList === false) { setIsList(true); setIsGrid(false) } }} style={[indexStyles.iconTouch, isList && indexStyles.activeIconTouch]}>
                                            <Image source={list} style={indexStyles.icon2} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Wallpapers category={categoryName} isList={isList} />
                            </View>
                        </View>
                    </View>
                    <View></View>
                </View>
            </ScrollView>
        </View>
    )

}

