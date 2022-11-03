import React from 'react';
import Toast from 'react-native-toast-message';
import {View, ActivityIndicator} from 'react-native';
import useGetExaminationQuery from '../hooks/useGetExaminationQuery';

const ExamloaderScreen = ({route, navigation}) => {
  const {data, isError, error, isLoading} = useGetExaminationQuery(
    route.params.examinationId,
  );

  React.useEffect(() => {
    if (!isLoading && !!data) {
      navigation.replace('Examresult', {
        examination: data.data,
      });
    }
  }, [isLoading, data, navigation]);

  React.useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });

      navigation.goBack();
    }
  }, [isError, error, navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default ExamloaderScreen;
