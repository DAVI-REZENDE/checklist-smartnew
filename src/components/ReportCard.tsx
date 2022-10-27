import { Text, View } from "react-native";
// import { CaretRight } from "phosphor-react-native";

export function ReportCard() {
  return (
    <View className="flex-row items-center w-full rounded border-l-2 border-purple-500 bg-white p-4">
      <View className="gap-2">
        <Text className="text-zinc-800 font-bold text-base">1 Turno - ABERTO 28 do 7 de 2022</Text>
        <Text>CB1000 - TESTE - Caminhão teste 1000 Hodrometro</Text>
        <Text className="text-zinc-500">Atualizado em 28 do 7 de 2022</Text>
        <Text className="text-zinc-500">Sincronizado em 28 do 7 de 2022</Text>
      </View>
      <Text>seta</Text>
    </View>
  )
}