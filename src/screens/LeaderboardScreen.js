import React from 'react';
import Toast from 'react-native-toast-message';
import {View, Text, ScrollView, Image} from 'react-native';
import useGetLeaderboardQuery from '../hooks/useGetLeaderboardQuery';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LeaderboardScreen = () => {
  const [filterBy, setFilterBy] = React.useState('week');

  const {data, isLoading, isError, error} = useGetLeaderboardQuery({filterBy});

  React.useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
    }
  }, [isError, error]);

  return (
    <View style={{flex: 1, backgroundColor: '#1E1E1E'}}>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            padding: 20,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#1E2237',
            justifyContent: 'space-between',
          }}>
          <View>
            <TouchableOpacity onPress={() => setFilterBy('week')}>
              <Text style={{color: filterBy === 'week' ? '#699BF7' : 'white'}}>
                Week
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => setFilterBy('month')}>
              <Text style={{color: filterBy === 'month' ? '#699BF7' : 'white'}}>
                Month
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => setFilterBy('year')}>
              <Text style={{color: filterBy === 'year' ? '#699BF7' : 'white'}}>
                Year
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 150,
          paddingHorizontal: 30,
        }}>
        {data?.data?.data?.map(item => (
          <View
            key={item.id}
            style={{
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              backgroundColor: '#1E2237',
            }}>
            <Image
              source={{
                width: 50,
                height: 50,
                uri: item.avatar,
              }}
              style={{
                borderRadius: 9999,
              }}
            />

            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 20}}>{item.name}</Text>
              <Text style={{color: 'white'}}>{item.username}</Text>
            </View>

            <View>
              <Text
                style={{
                  color:
                    item.points > item.previous_points ? '#00D95F' : '#D82953',
                }}>
                {item.points}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeaderboardScreen;
