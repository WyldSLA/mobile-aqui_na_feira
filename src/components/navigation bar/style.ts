import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 50,
        backgroundColor: colors.white.base,
        height: 90,
        shadowColor: colors.black.base,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        width: 70
    },
    focusedTab: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.terracota.base,
        width: 70
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.white.base,
        borderRadius: 999,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.terracota.base,
    },
    iconFocusedContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.terracota.base,
        borderRadius: 999,
        padding: 10,
    },
    label: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.terracota.base,
        marginTop: 4
    },
    focusedLabel: {
        color: colors.black.base
    }
})