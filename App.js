import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";

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
   
      return(
      <View key = {todo.id} style={s.cardItem}>
        <CardTodo onPress={updateTodo}
          todo={todo}
          onLongPress={deteleTodo}
        />
        </View>
      );
      
    }); 
  }

  function updateTodo(todo){
    const updateTodo = {
      ...todo,isCompleted: !todo.isCompleted
    }

    const updateTodoList =[...todoList];

    //  const angkaRandom = [{"id":1 },{"id":2 },{"id":3 }]

    //  const filterAngka = angkaRandom.filter((angka)=> angka.id%2===0);

    // const angkaYgDiPilih =  angkaRandom.findIndex((angka)=> angka.id=== 3);

    //console.log(angkaYgDiPilih);

    const indexToUpdate = updateTodoList.findIndex((todo)=> todo.id=== updateTodo.id);

    updateTodoList[indexToUpdate] = updateTodo;

    setTodoList(updateTodoList);

  }

  function deteleTodo(todoDelete){
    Alert.alert("Hapus","Apakah anda yakin ingin menghapus data ini?",[
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todo)=> todo.id !== todoDelete.id));
        }
      },{text: "Cancel", style: "cancel"}]);
  }


  function renderAddDialog(){
    return(

      <Dialog.Container visible = {true}>
      <Dialog.Title>Tambah Todo</Dialog.Title>
      <Dialog.Description>
        Apa yang ingin kamu lakukan?.
      </Dialog.Description>
      <Dialog.Input placeholder ="Mis : Mandi dan gosok gigi" />
      <Dialog.Button label="Cancel" />
      <Dialog.Button label="Save" />
    </Dialog.Container>
  
    );
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

        <ButtonAdd  />

          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
      {renderAddDialog()}
    </>
  );
}
