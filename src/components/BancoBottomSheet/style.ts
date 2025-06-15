import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        gap: 10,
        minHeight: 500
    },
    imageContainer: {
        width: "100%",
        height: 220,
        borderRadius: 24,
        marginBottom: 8
    },
    title: {
        fontFamily: fontFamily.bold,
        fontSize: 22,
    },
    description:{
        fontFamily: fontFamily.medium,
        fontSize: 16
    },
    tagsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: 4,
    },
    tagStyle: {
        backgroundColor: 'rgba(187, 59, 14, 0.2)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    tagText:{
        fontSize: 12,
        color: colors.terracota.base,
        fontFamily: fontFamily.semiBold
    },
    rowInfo:{
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8, 
        marginBottom: 8,
    },
    InfoItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16,
    },
    infoText: {
        marginLeft: 4,
        fontFamily: fontFamily.regular,
        color: colors.black.base,
        fontSize: 14
    },
    buttonContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    },
    ratingContainer: {
        width: 56,
        height: 26,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        gap: 4,
        backgroundColor: 'rgba(187, 59, 14, 0.2)'
    },
    ratingText: {
        fontSize: 12,
        color: colors.black.base,
        fontFamily: fontFamily.semiBold
    },
    containerTitleRating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 148
    }
})