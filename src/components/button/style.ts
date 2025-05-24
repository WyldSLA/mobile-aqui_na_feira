import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        backgroundColor: colors.white.base,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        flexDirection: "row",
        marginBottom: 80
    },
    title: {
        color:colors.terracota.base,
        fontFamily:fontFamily.semiBold,
        fontSize: 16
    }
})