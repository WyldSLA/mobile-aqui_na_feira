import {
    useFonts,
    Lexend_600SemiBold,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_700Bold
} from "@expo-google-fonts/lexend"

import { Loading } from "@/components/loading"
import NavigationBar from "@/components/navigation bar"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Lexend_600SemiBold,
        Lexend_400Regular,
        Lexend_500Medium,
        Lexend_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }

    return (
        <NavigationBar />
    )
}