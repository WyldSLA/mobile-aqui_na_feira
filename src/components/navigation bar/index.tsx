import { s } from "./style";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from "react-native";


import Home from "@/app/home";
import Perfil from "@/app/perfil";
import Favoritos from "@/app/favoritos";
import Notificacao from "@/app/notificacao";

const Tabs = createBottomTabNavigator()

export default function NavigationBar(){
    return(
        <Tabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: s.tabBar
        }}
        >
            <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={s.tab}>
                        <View style={focused ? s.iconFocusedContainer: s.iconContainer }>
                            <Ionicons name="home" size={24} color={focused ? "#fff" : "#A84D28"}/>
                        </View> 
                        <Text style={[s.label, focused && s.focusedLabel]}> Home </Text>
                    </View>
                ),
            }}
            />

            <Tabs.Screen
            name="Favoritos"
            component={Favoritos}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={s.tab}>
                        <View style={focused ? s.iconFocusedContainer: s.iconContainer }>
                            <Ionicons name="heart-outline" size={24} color={focused ? "#fff" : "#A84D28"}/>
                        </View>
                        <Text style={[s.label, focused && s.focusedLabel]}> Favoritos </Text>
                    </View>
                ),
            }}
            />

            <Tabs.Screen
            name="Notificacao"
            component={Notificacao}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={s.tab}>
                        <View style={focused ? s.iconFocusedContainer: s.iconContainer }>
                            <Ionicons name="notifications-outline" size={24} color={focused ? "#fff" : "#A84D28"}/>
                        </View>
                        <Text style={[s.label, focused && s.focusedLabel]}> Notificação </Text>
                    </View>
                ),
            }}
            />

            <Tabs.Screen
            name="Perfil"
            component={Perfil}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={s.tab}>
                        <View style={focused ? s.iconFocusedContainer: s.iconContainer }>
                            <Ionicons name="person-outline" size={24} color={focused ? "#fff" : "#A84D28"}/>
                        </View>
                        <Text style={[s.label, focused && s.focusedLabel]}> Perfil </Text>
                    </View>
                ),
            }}
            />
        </Tabs.Navigator>
    )
}

