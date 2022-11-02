import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ResultScreen = ({navigation, route}) => {
  const examination = route.params.examination;

  return (
    <ScrollView
      style={{backgroundColor: '#1E1E1E'}}
      contentContainerStyle={{
        padding: 30,
      }}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
        Results
      </Text>

      <View
        style={{
          padding: 15,
          borderRadius: 10,
          marginVertical: 20,
          flexDirection: 'row',
          backgroundColor: '#00E44E',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16}}>Correct answer: </Text>
        <Text style={{fontSize: 16}}>
          {examination.total_correct}/{examination.ques_count}
        </Text>
      </View>

      {examination.results.map(result => (
        <View
          key={result.id}
          style={{
            padding: 20,
            borderRadius: 15,
            marginBottom: 20,
            backgroundColor: '#1E2237',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>
            {result.question_text}
          </Text>

          {result.skipped ? (
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Skipped</Text>
            </View>
          ) : (
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginRight: 10}}>
                {result.is_correct ? (
                  <AntDesign size={22} name={'checkcircle'} color={'#00E44E'} />
                ) : (
                  <FontAwesome5 size={22} name={'times-circle'} color={'red'} />
                )}
              </View>
              <Text style={{color: 'white', fontSize: 18}}>
                {result.given_answer}
              </Text>
            </View>
          )}

          {!result.is_correct && (
            <React.Fragment>
              <View
                style={{
                  padding: 10,
                  borderRadius: 10,
                  marginVertical: 20,
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  backgroundColor: '#00E44E',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 16}}>Answer: </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>
                  {result.correct_answer}
                </Text>
              </View>
            </React.Fragment>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ResultScreen;
