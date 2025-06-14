import { View, Text } from "react-native";
import { useMemo, forwardRef, useRef, useImperativeHandle } from 'react';
import { BottomSheetModal, BottomSheetView, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { s } from "./style";

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
        <BottomSheetScrollView contentContainerStyle={s.container}>
          <Text style={s.title}>{banco?.nomeMarca}</Text>
          <Text style={s.categories}>{banco?.tipoProdutos?.join(" ")}</Text>
          <Text style={s.subtitle}>
            {banco?.endereco.rua}, {banco?.endereco.setor} - {banco?.endereco.numero} 
          </Text>
          <Text style={s.subtitle}>{banco?.horario}</Text>
          <Text style={s.description}>{banco?.descricao}</Text>
        </BottomSheetScrollView>
      </BottomSheetModal>
  );
});

export default BancoBottomSheet;
