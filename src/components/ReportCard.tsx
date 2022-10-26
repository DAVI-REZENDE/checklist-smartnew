import { Text, View } from "react-native";
import { CaretRight } from "phosphor-react-native";

export function ReportCard() {
  return (
    <View>
      <View>
        <Text className="text-zinc-800">1 Turno - ABERTO 28 do 7 de 2022</Text>
        <Text>CB1000 - TESTE - Caminhão teste 1000 Hodrometro</Text>
        <Text>Atualizado em 28 do 7 de 2022</Text>
        <Text>Sincronizado em 28 do 7 de 2022</Text>
      </View>
      <CaretRight size={32} color="rgb(37, 99, 235)" weight="bold" />
    </View>
  )
}