import AppHeader from "@/components/appHeader";
import Wallpapers from "@/components/wallpapers";
import WelcomeText from "@/components/welcomeText";
import { indexStyles } from "@/styles";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    clashDisplayBold: require("../assets/fonts/ClashDisplay-Bold.otf"),
    clashDisplayMedium: require("../assets/fonts/ClashDisplay-Medium.otf"),
    clashDisplayRegular: require("../assets/fonts/ClashDisplay-Regular.otf"),
    clashDisplaySemiBold: require("../assets/fonts/ClashDisplay-Semibold.otf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.otf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.otf"),
    poppinsRegular: require("../assets/fonts/Poppins-Regular.otf"),
    poppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.otf")
  })

  if (!fontsLoaded) return null

  return (
    <View style={{ flex: 1 }}>
      <AppHeader page="home" />

      <View style={indexStyles.mainView}>
        <WelcomeText page="home" />

        <View style={indexStyles.subView}>
          <View style={indexStyles.catView}>
            <Text style={indexStyles.header}>Categories</Text>
            <Text style={indexStyles.aside}>See All</Text>
          </View>

          <Wallpapers />
        </View>
      </View>
    </View>
  );
}
