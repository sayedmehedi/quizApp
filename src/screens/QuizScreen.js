import { View, Text,StyleSheet,Image,FlatList ,Dimensions} from 'react-native'
import React,{useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
const {width, height} = Dimensions.get('screen');
const slides = [
  {
    id: '1',
    title: 'Choose Nearest Club/Bar',
    subtitle:
      'Reference site about Lorem Ipsum,giving information origins as well as a random',
  },
  {
    id: '2',
    title: 'Book Tables',
    subtitle:
      'Reference site about Lorem Ipsum,giving information origins as well as a random',
  },
  {
    id: '3',
    title: 'Enjoy!!!',
    subtitle:
      'Reference site about Lorem Ipsum,giving information origins as well as a random',
  },
];

const QuizScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  return (
    <>
    <View style={{flex:1,backgroundColor:'#000815'}}>
      <View style={styles.headerContainer}>
        <Ionicons name='arrow-back-outline' size={30} color={'white'}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{
            height:40,
            width:80,
           
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
          <View style={{
            height:25,
            width:55,
            borderRadius:14,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'red',
            marginLeft:4,
            justifyContent:'center',
            alignItems:'center'
          }}>
           <Text style={{
            color:'white',
            fontSize:12
           }}>01:13</Text>

          </View>
        </View>

      </View>

       <View style={{
        padding:30,
      
        flex:1,
        justifyContent:'space-between'
       }}>
        <View style={{
          
        }}>

        <View style={{
          height:8,
          width:'100%',
          borderRadius:10,
          backgroundColor:'white',
          alignSelf:'center'
        }}>
          <View
          style={{
            height:8,
            width:'40%',
            backgroundColor:'blue',
            borderRadius:10,
          }}
          />
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginVertical:15,
          backgroundColor:'#1E2237',
          height:50,
          paddingHorizontal:20,
          alignItems:'center',
          borderRadius:10
        }}>
          <Text style={{color:'white'}}>Questions</Text>
          <Text style={{color:'white'}}>1/100</Text>
        </View>

        <View style={{height:200,
        width:'100%',
        backgroundColor:'#1E2237',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
        }}>
                <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
       
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View>
              
                  <Text style={{
                    color:'white'
                  }}>{item?.title}</Text>
                  <Text style={{
                    color:'white'
                  }}>{item?.subtitle}</Text>
              
            </View>
          );
        }}
      />
        </View>


        <TextInput
        placeholder='Type Your answer'
        placeholderTextColor={'#5A5A5A'}
        style={{
          height:60,
          width:'100%',
          paddingLeft:15,
          borderWidth:1,
          borderColor:'#FFFFFF',
          marginVertical:20,
          borderRadius:10,
          color:'white'
        }}
        />
        </View>

        <View style={{
          height:200,
          width:'100%',
         
          alignItems:'center',
          justifyContent:'space-between',
          padding:10
        }}>
          <TouchableOpacity>
            <Text style={{color:'white',fontSize:14}}>SKIP QUESTION </Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{
              height:20,
              width:20,
              backgroundColor:'white',
              borderRadius:10,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <AntDesign name={'info'} size={14} color={'black'}/>

            </TouchableOpacity>
            <Text style={{
              backgroundColor:'#1E2237',
              padding:5,
              color:'white',
              marginLeft:10,
              marginTop:-30,
              height:30
            }}>Hints</Text>
            </View>

     <TouchableOpacity
      onPress={goToNextSlide}
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


        </View>

        

        </View>  
        
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

export default QuizScreen