import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 42,
        left: 25,
        right: 25,
        borderRadius: 999,
        backgroundColor: colors.white.base,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
        shadowColor: colors.black.base,
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        marginTop: 24
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        backgroundColor: colors.white.base,
        alignItems: "center",
        justifyContent: "center"
    },
    iconFocusedContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.terracota.base,
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.8)",
        marginTop: 6,
        fontFamily: fontFamily.medium,
        textAlign: "center",
        maxWidth: 80
    },
    focusedLabel: {
        color: colors.terracota.base,

    }
})