import AppHeader from "@/components/appHeader";
import WelcomeText from "@/components/welcomeText";
import { wallpapers } from "@/constants/wallpapers";
import { indexStyles } from "@/styles";
import { useFonts } from "expo-font";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
        <WelcomeText />
        <View style={indexStyles.subView}>
          <View style={indexStyles.catView}>
            <Text style={indexStyles.header}>Categories</Text>
            <Text style={indexStyles.aside}>See All</Text>
          </View>
          <ScrollView contentContainerStyle={indexStyles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={indexStyles.wallpaperGroupView}>
              {
                (wallpapers).map((item, idx) =>
                  <TouchableOpacity>
                    <ImageBackground source={item.wallpapers[0]} style={indexStyles.wallpaperView} imageStyle={indexStyles.imgStyle} key={idx}>
                      <View style={indexStyles.textView}>
                        <Text style={indexStyles.wallpaperName}>{item.name}</Text>
                        <Text style={indexStyles.wallpaperDesc}>{item.description}</Text>
                        <Text style={indexStyles.wallpaperNum}>{item.wallpapers.length} wallpapers</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
