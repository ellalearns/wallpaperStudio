import { images } from "@/constants/images";
import { welcomeTxtStyles } from "@/styles/componentStyles/welcomeText";
import { Image, Text, View } from "react-native";

export default function WelcomeText () {

    return (
        <View style={welcomeTxtStyles.view}>
            <Image source={images.welcomeText} style={welcomeTxtStyles.img} />
            <Text style={welcomeTxtStyles.txt}>Discover curated collections of stunning wallpapers. Browse by category, preview in full-screen, and set your favorites.</Text>
        </View>
    )
}
