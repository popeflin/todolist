import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import checkImage  from "../../assets/check.png"

export function CardTodo({todo,onPress}) {
  
  return (
    <TouchableOpacity style={s.card}  onPress={()=>onPress(todo)}> 
      <Text
        style={[
          s.title,
          todo.isCompleted && { textDecorationLine: "line-through" }, 
        ]}
      >
        {todo.title}
      </Text>
    {todo.isCompleted &&  <Image style={s.img} source ={checkImage} /> } 
    </TouchableOpacity>
  );
}
 