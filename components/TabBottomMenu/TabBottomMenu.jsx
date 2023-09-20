
import { Text,TouchableOpacity,View } from "react-native";
import {s} from "./TabBottomMenu.style";

export function TabBottomMenu({onPress , todoList}) {

    return(
        <View style= {s.container}>
            <TouchableOpacity onPress = {()=> onPress("all")}>
                <Text>All Todo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=> onPress("inprogress")}>
                <Text>InProgress</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress = {()=>onPress("completed")}>
                <Text>Done</Text>
            </TouchableOpacity>


        </View>
    );
}