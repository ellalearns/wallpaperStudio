import AppHeader from "@/components/appHeader";
import WelcomeText from "@/components/welcomeText";
import { fonts } from "@/styles/globals";
import { Image, Text, View } from "react-native";

export default function Settings () {
    return (
        <View>
            <AppHeader page="settings" />

            <View style={{ padding: 50 }}>
                <WelcomeText page="settings" />

                {/* <View style={{ width: 1342, height: 628, borderWidth: 1, borderRadius: 36, borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "#ffffff", marginTop: 50}}>

                    <View>
                        <Text style={{ fontFamily: fonts.poppinsMedium, fontSize: 24, color: "#000000" }}>Wallpaper Setup</Text>
                        <Text style={{ fontFamily: fonts.poppinsRegular, fontSize: 14, color: "#000000"}}>Configure your wallpaper settings and enable auto-rotation</Text>
                    </View>

                    <Image  />
                </View> */}
            </View>
        </View>
    )
}
