import AppHeader from "@/components/appHeader";
import Wallpapers from "@/components/wallpapers";
import { images } from "@/constants/images";
import { indexStyles } from "@/styles";
import { categoryStyles } from "@/styles/categoryStyles";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { wallpapers } from "@/constants/wallpapers";
import { fonts } from "@/styles/globals";

export default function Category() {

    const { category } = useLocalSearchParams()
    if (!category) return null

    const categoryName = category.toString()

    const [isGrid, setIsGrid] = useState(true)
    const grid = isGrid ? images.activeGrid : images.grid

    const [isList, setIsList] = useState(false)
    const list = isList ? images.activeList : images.list

    const [currentWallpaper, setCurrentWallpaper] = useState(wallpapers.find(item => item.name === category)?.wallpapers[0] ?? null)

    type ImageDetails = {
        name: string;
        description: string;
        tags: string[];
    };

    const [imageDetails, setImageDetails] = useState<ImageDetails>({
        name: "",
        description: "",
        tags: []
    })

    useEffect(() => {
        const categoryDetails = wallpapers.find(item => item.wallpapers.some(([img]) => img === currentWallpaper))
        const wallpaper = categoryDetails?.wallpapers.find(([img]) => img === currentWallpaper)

        setImageDetails({
            name: wallpaper?.[1] || "",
            description: categoryDetails?.longDesc || "",
            tags: categoryDetails?.tags || []
        })
    }, [currentWallpaper])



    return (
        <View style={{ flex: 1 }}>
            <AppHeader page="browse" />

            <ScrollView style={categoryStyles.scrollView}>
                <View style={categoryStyles.subView}>
                    <View style={categoryStyles.leftV}>
                        <TouchableOpacity onPress={() => router.push("/browse")} style={categoryStyles.headerView}>
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
                                <Wallpapers category={categoryName} isList={isList} setCurrentWallpaper={setCurrentWallpaper} />
                            </View>
                        </View>
                    </View>

                    <LinearGradient
                        colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={categoryStyles.rightV}
                    >
                        <View style={categoryStyles.wholePreviewV}>
                            <View style={categoryStyles.previewSub}>
                                <Text style={categoryStyles.previewT}>Preview</Text>
                                <View style={categoryStyles.midV}>
                                    <View>
                                        <Text style={categoryStyles.label}>Name</Text>
                                        <Text style={categoryStyles.currentName}>{imageDetails.name}</Text>
                                    </View>

                                    <View>
                                        <Text style={categoryStyles.label}>Tags</Text>
                                        <View style={{ flexDirection: "row", gap: 12}}>
                                            {
                                            imageDetails.tags.map((item, idx) => <Text key={idx} style={[indexStyles.wallpaperNum, indexStyles.wallpaperNumList, { color: "#000000", backgroundColor: "rgba(191, 191, 191, 0.2)"}]}>{item}</Text>)
                                        }
                                        </View>
                                    </View>

                                    <View style={{paddingTop: 10}}>
                                        <Text style={categoryStyles.label}>Description</Text>
                                        <Text style={{ height: 130, overflow: "scroll", fontFamily: fonts.poppinsMedium, fontSize: 14, color: "#000000", overflowX: "hidden", overflowY: "scroll" }}>{imageDetails.description}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 144, justifyContent: "space-between", flexDirection: "row" }}>
                                    <TouchableOpacity style={categoryStyles.iconTouch}>
                                        <Image source={images.share} style={{ width: 24, height: 24 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={categoryStyles.iconTouch}>
                                        <Image source={images.resize} style={{ width: 24, height: 24 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={categoryStyles.iconTouch}>
                                        <Image source={images.settings} style={{ width: 24, height: 24 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                {currentWallpaper &&
                                    <ImageBackground style={{ width: 258, height: 525, gap: 25, borderWidth: 4, borderRadius: 25 }} imageStyle={{ borderRadius: 20, width: "100%", height: "100%" }} source={currentWallpaper}>
                                        <Image source={images.notch} style={{ width: 72, height: 25, position: "absolute", top: 10, alignSelf: "center", borderRadius: 26 }} />
                                        <Image source={images.screenNav} style={{ width: 84, height: 2.6, position: "absolute", bottom: 10, alignSelf: "center" }} />
                                    </ImageBackground>
                                }
                            </View>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                            <View></View>

                            <View style={{ width: 420, gap: 20, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={categoryStyles.actionTouch}>
                                    <Image source={images.heart} style={{height: 24, width: 24, gap: 10}} />
                                    <Text style={{ fontFamily: fonts.poppinsMedium, fontSize: 14, color: "#000000"}}>Save to Favorites</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[categoryStyles.actionTouch, { backgroundColor: "#fbb03b"}]}>
                                    <Text style={{ fontFamily: fonts.poppinsMedium, fontSize: 14, color: "#ffffff"}}>Set to Wallpaper</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    )

}

