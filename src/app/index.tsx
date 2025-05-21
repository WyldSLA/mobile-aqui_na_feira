import { Loading } from "@/components/loading"
import Logo from "@/components/logo"
import { View} from "react-native"

export default function Index(){
    return (
        <View
            style={{flex: 1, padding:40, gap:10 }}
        >
            <Logo/>
            <Loading/>
        </View>
    )
} 