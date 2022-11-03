import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import useGetProfileQuery from '../hooks/useGetProfileQuery';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

const ProfileScreen = () => {
  const {data: getProfileResponse, isLoading} = useGetProfileQuery();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: '#000815', flex: 1}}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1E2237',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderWidth: 3,
              borderRadius: 50,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: getProfileResponse?.data?.avatar,
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
          </View>

          <View
            style={{
              padding: 5,
              marginLeft: 10,
              borderRadius: 10,
              backgroundColor: '#FFFBE3',
            }}>
            <Text style={{color: 'black', fontSize: 14}}>Welcome!</Text>
            <Text style={{color: 'black', fontSize: 17}}>
              {getProfileResponse?.data?.name}
            </Text>
          </View>

          <View style={{flex: 1}} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                paddingVertical: 5,
                alignItems: 'center',
                flexDirection: 'row',
                borderColor: 'white',
                paddingHorizontal: 10,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/coin.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 5,
                }}
              />
              <Text style={{color: 'white', marginLeft: 5}}>
                {getProfileResponse?.data?.coins}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                marginLeft: 4,
                borderRadius: 14,
                alignItems: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                justifyContent: 'center',
              }}>
              <Feather name="plus" size={16} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '48%',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
              {Math.round(
                getProfileResponse?.data?.exam_stats?.exam_rating ?? 0,
              )}
              /10
            </Text>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              Exam Rating
            </Text>
          </View>

          <View
            style={{
              width: '48%',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
              {getProfileResponse?.data?.exam_stats?.total_exams ?? 0}
            </Text>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              Exam
            </Text>
          </View>

          <View
            style={{
              width: '48%',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
              {getProfileResponse?.data?.exam_stats?.total_ques ?? 0}
            </Text>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              Question
            </Text>
          </View>

          <View
            style={{
              width: '48%',
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>
              {getProfileResponse?.data?.exam_stats?.total_correct ?? 0}
            </Text>
            <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
              Right Answer
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
