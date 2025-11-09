import AppHeader from "@/components/appHeader";
import WelcomeText from "@/components/welcomeText";
import { images } from "@/constants/images";
import { fonts } from "@/styles/globals";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Favorites() {

    return (
        <View>
            <AppHeader page="favorites" />

            <View style={{ paddingTop: 50, paddingLeft: 50 }}>
                <WelcomeText page="favorites" />

                {
                     <View style={{ justifyContent: "space-between", height: 375, alignSelf: "center", alignItems: "center", marginTop: 50 }}>
                        <Image source={images.emptySave} style={{ height: 186, width: 198 }} />
                        <View>
                            <Text style={{ fontFamily: fonts.poppinsMedium, fontSize: 24, color: "#575757", textAlign: "center" }}>No Saved Wallpapers</Text>
                            <Text style={{ fontFamily: fonts.poppinsRegular, fontSize: 14, color: "#575757", textAlign: "center" }}>Start saving your favorite wallpapers to see them here</Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push("/browse")} style={{ height: 50, width: 200, borderRadius: 21, padding: 10, gap: 10, backgroundColor: "#fbb03b", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontFamily: fonts.poppinsMedium, fontSize: 14, color: "#ffffff", textAlign: "center" }}>Browse Wallpapers</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}
