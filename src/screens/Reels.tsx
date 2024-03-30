import {View, Alert, FlatList, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchReelsSlice} from '../reduxStore/ReelsSlice';
import CustomVideo from './CustomVideo';
import {HEIGHT} from '../utils/responsive';

const Reels = () => {
  const dispatch = useDispatch();
  const [reelsData, setReelsData] = useState<any>([]);
  const FlatlistRef = useRef(null);
  const [ViewableItem, SetViewableItem] = useState('');
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 70});
  useEffect(() => {
    dispatch(
      fetchReelsSlice(
        (res: any) => {
          if (res.status === 200) {
            setReelsData(res?.data?.hits);
          }
        },
        (err: any) => {
          Alert.alert(JSON.stringify(err));
        },
      ),
    );
  }, []);
  const onViewRef = useRef(viewableItems => {
    if (viewableItems?.viewableItems?.length > 0)
      SetViewableItem(viewableItems.viewableItems[0].item.id || 0);
  });
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={reelsData}
        contentContainerStyle={{flexGrow: 1}}
        // renderItem={({item}) => {
        //   console.log(item);
        //   return <Text>hehjhjhj</Text>;
        // }}
        ref={FlatlistRef}
        // showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CustomVideo data={item?.videos} />}
        keyExtractor={(_, index) => `id${index}`}
        pagingEnabled
        decelerationRate={0.9}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        getItemLayout={(_data, index) => ({
          length: HEIGHT,
          offset: HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

export default Reels;
