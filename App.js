import { StatusBar } from 'expo-status-bar';
import { Image,Pressable ,StyleSheet, Text, View } from 'react-native';
import Lua from './assets/lua.png';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Lua} style = {styles.lua}/>
      <View style = {styles.box}>
        <Text style = {styles.titulo}>lua</Text>
        <Text style = {styles.texto}>Essa é a <Text style = {{fontWeight: 'bold'}}>nossa</Text> lua, e ela não é feita de queijo. XD</Text>      
      </View>

      <View style = {{flexDirection:'row'}}>
        <Pressable style ={styles.press}>
          <Text style = { styles.texto}> isso e um botao </Text>
        </Pressable>
        <Pressable style ={styles.press}>
          <Text style = { styles.texto}> isso e um botao </Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  press:{
    color:'blue',
    margin:20,
    justifyContent:'center',
    backgroundColor:'lightgrey',
    borderRadius: 30,
    width:120,
    height:80,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lua:{
    height:200,
    width:200,
    marginBottom:30
  },
  titulo:{
    fontSize:30,
    textTransform:'capitalize',
    color:'white',
    textAlign:'center',
    marginBottom:20
  },
  texto:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    paddingBottom:2,
    marginBottom:20
  },
  box:{
    marginHorizontal:15,
    borderWidth:1,
    borderRadius:30,
    borderColor:'white',
    borderStyle: 'dotted',
    padding:10,
    paddingHorizontal:50,
  },
});
