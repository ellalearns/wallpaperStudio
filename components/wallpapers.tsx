import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { indexStyles } from "@/styles"
import { wallpapers } from "@/constants/wallpapers"

type WallpapersProps = {
  isList?: boolean
}

export default function Wallpapers ({ isList }: WallpapersProps) {

    return (
        <ScrollView contentContainerStyle={indexStyles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={[indexStyles.wallpaperGroupView, isList && indexStyles.wallpaperGroupViewList]}>
              {
                (wallpapers).map((item, idx) =>
                  <TouchableOpacity style={isList && indexStyles.wallpaperTouch}>
                    <ImageBackground source={item.wallpapers[0]} style={[indexStyles.wallpaperView, isList && indexStyles.wallpaperViewList]} imageStyle={indexStyles.imgStyle} key={idx}>
                    </ImageBackground>
                    <View style={[indexStyles.textView, isList && indexStyles.textViewList]}>
                        <Text style={[indexStyles.wallpaperName, isList && indexStyles.fontList]}>{item.name}</Text>
                        <Text style={[indexStyles.wallpaperDesc, isList && indexStyles.fontList]}>{item.description}</Text>
                        <Text style={[indexStyles.wallpaperNum, isList && indexStyles.fontList, isList && indexStyles.wallpaperNumList]}>{item.wallpapers.length} wallpapers</Text>
                      </View>
                  </TouchableOpacity>
                )
              }
            </View>
          </ScrollView>
    )
}
