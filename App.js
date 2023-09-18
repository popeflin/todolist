import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";

export default function App() {
  
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Nyari cemilan", isCompleted: true },
    { id: 2, title: "Belajar React Native", isCompleted: false },
    { id: 3, title: "Main Mobile Legend", isCompleted: false },
    { id: 4, title: "Pergi bareng mantan", isCompleted: true },
    { id: 5, title: "Main Mortal Kombat 1", isCompleted: false },
    { id: 6, title: "Belajar Machine Learning", isCompleted: false },
    { id: 7, title: "Ujian React Native", isCompleted: true },
    { id: 8, title: "Mandi di sungai", isCompleted: false },
    { id: 9, title: "Nyari kucing hilang", isCompleted: false },
  ]);

  

  function renderTodoList() {
   
    return todoList.map((todo) => {
      console.log(todo.title)
     return(
      <View style={s.cardItem}>
        <CardTodo
          todo={todo}
        />
        </View>
      )
      
    });
     
       
        
     
   
  }
  
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
        
       {/* <FlatList
         data = {todoList}
         renderItem={({item}) => <CardTodo todo={item} />}
          keyExtractor={item => item.id}>
        </FlatList> */}

        <ScrollView>
        {renderTodoList() }
        </ScrollView>


          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
