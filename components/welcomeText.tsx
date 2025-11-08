import { images } from "@/constants/images";
import { welcomeTxtStyles } from "@/styles/componentStyles/welcomeText";
import { Image, Text, View } from "react-native";
import { AppHeaderProps } from "./appHeader";

const options = {
    "home": [images.welcomeText, "Discover curated collections of stunning wallpapers. Browse by category, preview in full-screen, and set your favorites.", 870],
    "browse": [images.browseCategories, "Explore our curated collections of stunning wallpapers", 560],
    "favorites": [images.savedWallpapers, "Your saved wallpapers collection", 523],
    "settings": [images.settingsTxt, "Your saved wallpapers collection", 241]
}

export default function WelcomeText({ page }: AppHeaderProps) {

    const header = options[page][0]
    const pText = options[page][1]

    return (
        <View style={welcomeTxtStyles.view}>
            <View style={welcomeTxtStyles.imgView}>
                <Image source={header} style={[welcomeTxtStyles.img, { width: options[page][2] }]} />
            </View>
            <Text style={welcomeTxtStyles.txt}>{pText}</Text>
        </View>
    )
}
