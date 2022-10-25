import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ExamTypeScreen = ({navigation}) => {
 
  const [inputType,setInputType] = useState(false);
  const [trueFalseType,setTrueFalseType] = useState(true);
  const [orderSelectType,setOrderSelectType] = useState(false);
  const [randomType, setRandomType] = useState(false);
 
  return (
    <>
    <View style={{flex:1,backgroundColor:'#000815'}}>
      <View style={styles.headerContainer}>
        <Ionicons name='arrow-back-outline' size={30} color={'white'}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{
            height:40,
            width:80,
            borderWidth:1,
            borderColor:'white',
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center'
          }}>
             <View style={{flexDirection:'row',}}>
            <Image
            source={require('../assets/coin.png')}
            style={{
              height:25,
              width:25
            }}
            />
            <Text style={{color:'white',marginLeft:5}}>20</Text>
            </View>

          </View>
          <TouchableOpacity style={{
            height:25,
            width:25,
            borderRadius:14,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            marginLeft:4,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Feather name='plus' size={16} color={'black'}/>

          </TouchableOpacity>
        </View>

      </View>

      <View style={{
        padding:20,
        flex:1
      }}>
        <View style={{height:200,
        width:'100%',
        backgroundColor:'#1E2237',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
        }}>
          <Text style={{
            fontWeight:'bold',
            fontSize:36,
            color:'white',
            textAlign:'center'
          }}>What kind of exam type you prefer?</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
          <TouchableOpacity 
          onPress={()=> {
           
            setInputType(true);
            setOrderSelectType(false);
            setTrueFalseType(false);
            setRandomType(false);
          }}
          style={{
            height:50,
            width:150,
            borderRadius:10,
            backgroundColor:inputType? 'white': '#1E2237',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{color: inputType? 'black':'white'}}>Input Answer</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=> {
            
            setInputType(false);
            setOrderSelectType(false);
            setTrueFalseType(true);
            setRandomType(false);
          }}
          style={{
            height:50,
            width:150,
            borderRadius:10,
            backgroundColor:trueFalseType? 'white': '#1E2237',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{color:trueFalseType? 'black': 'white'}}>True/False</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
          <TouchableOpacity 
          onPress={()=> {
            setInputType(false);
            setOrderSelectType(true);
            setTrueFalseType(false);
            setRandomType(false);
          }}
          style={{
            height:50,
            width:150,
            borderRadius:10,
            backgroundColor:orderSelectType?'white': '#1E2237',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{color:orderSelectType? 'black': 'white'}}>Order Select</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=> {

            setInputType(false);
            setOrderSelectType(false);
            setTrueFalseType(false);
            setRandomType(true);
          }}
          style={{
            height:50,
            width:150,
            borderRadius:10,
            backgroundColor:randomType?'white':'#1E2237',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{color:randomType?'black':'white'}}>Random</Text>
          </TouchableOpacity>
        </View>
      </View>
      
     

     <TouchableOpacity
      onPress={() => navigation.navigate('quiz')}
     style={{
       height: 70,
       width: 70,
       borderRadius: 35,
       backgroundColor: 'white',
       
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end',
        right:10
       
     }}>
     <FontAwesome5 name="arrow-right" color={'#000815'} size={40} />
   </TouchableOpacity>
      
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    height:70,
    width:'100%',
   
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    justifyContent:'space-between'

  }
})

export default ExamTypeScreen