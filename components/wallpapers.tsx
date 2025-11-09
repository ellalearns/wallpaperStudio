import { ScrollView, View, Text, TouchableOpacity, ImageBackground, Image } from "react-native"
import { indexStyles } from "@/styles"
import { wallpapers } from "@/constants/wallpapers"
import { router } from "expo-router"
import { images } from "@/constants/images"
import { categoryStyles } from "@/styles/categoryStyles"

type WallpapersProps = {
  isList?: boolean,
  category?: string,
  setCurrentWallpaper?: (value: any) => void
}

export default function Wallpapers({ isList, category, setCurrentWallpaper }: WallpapersProps) {

  const categoryWallpapers = wallpapers.find(item => item.name === category)?.wallpapers ?? []
  console.log(categoryWallpapers)

  const categoryDetails = category ? (wallpapers.find((item) => item.name === category)) : {}

  return (
    <ScrollView contentContainerStyle={indexStyles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={[indexStyles.wallpaperGroupView, isList && indexStyles.wallpaperGroupViewList, category ? null : indexStyles.allWallpaperGroupView]}>
        {
          category ? categoryWallpapers.map((item, idx) =>
            <TouchableOpacity onPress={() => {setCurrentWallpaper ? setCurrentWallpaper(item[0]) : null}} style={isList && indexStyles.wallpaperTouch} key={idx}>

              <ImageBackground source={item[0]} style={[indexStyles.catWallpaperView, isList && indexStyles.wallpaperViewList]} imageStyle={indexStyles.catImgStyle}>
              </ImageBackground>

              <View style={[indexStyles.catTextView, isList && indexStyles.textViewList]}>

                <Text style={[indexStyles.catWallpaperName, isList && indexStyles.fontList]}>{item[1]}</Text>
                
                <Text style={[indexStyles.wallpaperNum, isList && indexStyles.fontList, isList && indexStyles.wallpaperNumList]}>{category}</Text>

              </View>

              <TouchableOpacity style={[categoryStyles.saveView, isList && categoryStyles.listsaveView]}>
                <Image source={item[2] === "saved" ? images.saved : images.save} style={categoryStyles.saveImg} />
              </TouchableOpacity>

            </TouchableOpacity>
            )

            : (wallpapers).map((item, idx) =>
              <TouchableOpacity onPress={() => {
                router.push({
                  pathname: "/category",
                  params: { category: item.name }
                })
              }} style={isList && indexStyles.wallpaperTouch} key={idx}>
                <ImageBackground source={item.wallpapers[0][0]} style={[indexStyles.wallpaperView, isList && indexStyles.wallpaperViewList]} imageStyle={indexStyles.imgStyle}>
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
