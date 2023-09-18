import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";

export function CardTodo() {
  return (
    <TouchableOpacity style={s.card}>
      <Text
        style={[
          s.title
        ]}
      >
        <Text style={s.title}> Ngapain aja ya .....</Text>
      </Text>
    </TouchableOpacity>
  );
}
