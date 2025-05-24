import { View, StyleSheet} from "react-native"
import MapView from "react-native-maps"

const currentLocation = {
    latitude: -8.289684586242544, 
    longitude: -35.97204122464167
}

export default function Home(){

    return (
        <View style={s.container}>
            <MapView 
            style={s.map}
            initialRegion={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1
    },
    map:{
      width: "100%",
      height: "100%"
    }
})