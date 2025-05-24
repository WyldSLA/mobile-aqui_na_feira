import { fontFamily, colors } from "@/styles/theme";
import { View, Text } from "react-native";

export default function Notificacao(){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 32, fontFamily: fontFamily.bold, color: colors.terracota.base}}>Notificação</Text>
        </View>
    )
}