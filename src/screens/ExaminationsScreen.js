import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ExaminationsScreen = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000815', position: 'relative'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ExamDifficulty')}
          style={{
            right: 25,
            width: 50,
            height: 50,
            bottom: 150,
            padding: 10,
            borderWidth: 1,
            borderRadius: 9999,
            position: 'absolute',
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome5 color={'white'} name={'plus'} size={22} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default ExaminationsScreen;
