import { Text, View } from "react-native";
import { useFonts } from "expo-font"
import AppHeader from "@/components/appHeader";

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
    </View>
  );
}
