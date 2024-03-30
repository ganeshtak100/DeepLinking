import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {memo, useRef, useState} from 'react';
import Video from 'react-native-video';
import {HEIGHT, WIDTH} from '../utils/responsive';

const CustomVideo = ({data}: any) => {
  const [currentIndex, setCurrentIndex] = useState<number | string>(0);
  const [videoId, setVideoId] = useState<number | string>(0);
  const [isPaused, setPause] = useState(false);
  const [viewable, setViewable] = useState(true);
  const videoRef = useRef<Video>();
  return (
    <View style={{width: WIDTH, height: HEIGHT}}>
      <Video
        poster={data?.thumbnail}
        posterResizeMode="cover"
        source={{uri: data?.tiny?.url}} // Can be a URL or a local file.
        ref={videoRef} // Store reference
        onBuffer={() => {
          console.log('video buffering');
        }} // Callback when remote video is buffering
        onError={() => {
          console.log('video got error ');
        }} // Callback when video cannot be loaded
        style={{
          width: WIDTH,
          height: HEIGHT,
        }}
        resizeMode="cover"
        preload="auto"
        paused={isPaused}
      />
      <TouchableOpacity
        style={{
          height: HEIGHT,
          width: WIDTH,
          position: 'absolute',
          marginTop: 50,
        }}
        activeOpacity={1}
        onPress={() => {
          setPause(!isPaused);
          setCurrentIndex(data.id);
          data?.id == videoId && data?.id == currentIndex
            ? setVideoId(-1)
            : setVideoId(data?.id);
        }}
      />
    </View>
  );
};

export default memo(CustomVideo);
