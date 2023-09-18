import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import checkImage  from "../../assets/check.png"

export function CardTodo({todo}) {
  console.log(todo)
  return (
    <TouchableOpacity style={s.card}>
      <Text
        style={[
          s.title 
        ]}
      >
        {todo.title}
      </Text>
    {todo.isCompleted &&  <Image style={s.img} source ={checkImage} /> } 
    </TouchableOpacity>
  );
}
 