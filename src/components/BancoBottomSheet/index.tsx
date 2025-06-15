import { View, Text, Image } from "react-native";
import { useMemo, forwardRef, useRef, useImperativeHandle } from 'react';
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { s } from "./style";
import { colors } from "@/styles/theme";
import { MapPinHouse, Clock, Facebook, Instagram, Navigation, Heart, Star } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons"
import Button from "../button";
import { Loading } from "../loading";

export type BancoInfo = {
  nomeMarca: string,
  foto: string,
  tipoProdutos: string[],
  horario: string,
  descricao: string,
  endereco: {
    rua: string,
    setor: string,
    numero: string,
  },
  feiranteInfo: {
    whatsapp: string,
    facebook: string,
    instagram: string,
  }
};

export type BancoBottomSheetHandle = {
  open: () => void;
  close: () => void;
};

type Props = {
  banco: BancoInfo | null,
  loading: boolean
};

const BancoBottomSheet = forwardRef<BancoBottomSheetHandle, Props>(({ banco, loading }, ref) => {

  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    open: () => bottomSheetRef.current?.present(),
    close: () => bottomSheetRef.current?.dismiss(),
  }));

  return (
      <BottomSheetModal 
      ref={bottomSheetRef} 
      snapPoints={snapPoints} 
      index={1}
      enablePanDownToClose={true}
      >
        {
          loading ? (<Loading/>) : (
            <BottomSheetScrollView contentContainerStyle={s.container}>
              <View style={{ position: "relative" }}>
                <Image
                source={{uri: banco?.foto}}
                style={s.imageContainer}
                resizeMode="cover"
                />

                <Button icon={<Heart size={28} color={colors.white.base}/>} circle 
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 18,
                }}/>
              </View>

              <View style={s.tagsContainer}>
                {banco?.tipoProdutos?.map((p, index) => (
                  <View key={index} style={s.tagStyle}>
                    <Text style={s.tagText}>
                      {p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={s.containerTitleRating}>
                <Text style={s.title}>{banco?.nomeMarca}</Text>
                <View style={s.ratingContainer}>
                  <Star size={16} color={colors.terracota.base} fill={colors.terracota.base}/>
                  <Text style={s.ratingText}>4.5</Text>
                </View>
              </View>


              <Text style={s.description}>{banco?.descricao}</Text>
              
              <View style={s.rowInfo}>
                <View style={s.InfoItem}>
                  <MapPinHouse color={colors.terracota.base} size={24} />
                  <Text style={s.infoText}>
                    {banco?.endereco.rua}, {banco?.endereco.setor}, Nº {banco?.endereco.numero} 
                  </Text>
                </View>
                <View style={s.InfoItem}>
                  <Clock color={colors.terracota.base} size={24}/>
                  <Text style={s.infoText}>{banco?.horario}</Text>
                </View>
              </View>

              <View style={s.buttonContainer}>
                <Button icon={<Facebook size={24} color={colors.white.base}/>} circle/>
                <Button icon={<Instagram size={24} color={colors.white.base}/>} circle/>
                <Button icon={<Ionicons name="logo-whatsapp" size={24} color={colors.white.base}/>} circle/>
                <Button title="Mostrar Rota" icon={<Navigation size={24} color={colors.white.base}/>} onPress={() => {console.log("Botão Rota")} }/>
              </View>
        </BottomSheetScrollView>
          )
        }
      </BottomSheetModal>
  );
});

export default BancoBottomSheet;
