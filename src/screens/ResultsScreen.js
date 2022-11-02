import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useGetExaminationsQuery from '../hooks/useGetExaminationsQuery';

const ResultsScreen = ({navigation, route}) => {
  const {
    data,
    error,
    refetch,
    isLoading,
    hasNextPage,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetExaminationsQuery();

  const itemList = React.useMemo(() => {
    return data?.pages?.flatMap(eachPage => eachPage.data.data) ?? [];
  }, [data]);

  if (isLoading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={{flex: 1}}
      refreshing={isRefetching}
      onRefresh={() => refetch()}
      onEndReached={() => {
        if (hasNextPage) {
          fetchNextPage();
        }
      }}
      contentContainerStyle={{
        paddingTop: 30,
        paddingBottom: 150,
        paddingHorizontal: 30,
        backgroundColor: '#1E1E1E',
      }}
      data={itemList}
      ListFooterComponent={
        isFetchingNextPage ? (
          <View>
            <Text style={{color: 'white'}}>Loading..</Text>
          </View>
        ) : null
      }
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      renderItem={({item}) => {
        return (
          <View
            style={{backgroundColor: '#1E2237', padding: 20, borderRadius: 10}}>
            <Text style={{color: 'white', marginTop: 5}}>
              {new Date(item?.created_at).toUTCString()}
            </Text>
            <Text style={{color: 'white', marginTop: 5}}>
              Difficulty: {item?.difficulty_level}
            </Text>
            <Text style={{color: 'white'}}>
              Question type: {item?.ques_kind}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white'}}>
                Total question: {item?.ques_count}
              </Text>
              <Text style={{color: 'white'}}>
                Total correct: {item?.total_correct}
              </Text>
              <Text style={{color: 'white'}}>
                Total hints: {item?.total_hints}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ResultsScreen;
