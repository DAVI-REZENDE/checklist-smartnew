import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import Logo from "../assets/logo.svg";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({navigation}: Props) {
  return (
    <View className="flex-1 bg-blue-800 items-center justify-center">
      <View className="bg-white rounded-lg p-4 max-w-xs w-full items-center gap-2">
        {/* <Logo /> */}
        <Text className="font-bold text-xl">Acesse</Text>
        <TextInput placeholderTextColor="rgb(113, 113, 122)" className="border border-zinc-300 rounded-md px-4 py-3 w-full placeholder:text-zinc-500" placeholder="Login" />
        <TextInput placeholderTextColor="rgb(113, 113, 122)" className="border border-zinc-300 rounded-md px-4 py-3 w-full placeholder:text-zinc-500" placeholder="Senha" />
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-blue-600 w-full px-4 py-3 rounded-md items-center"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-white uppercase font-bold text-base">Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}