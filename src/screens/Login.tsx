import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Login() {
  return (
    <View className="flex-1 bg-blue-500 items-center justify-center">
      <View>
        <Text>Acesse</Text>
        <TextInput placeholder="Login" />
        <TextInput placeholder="Senha" />
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}