import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Clipboard from '@react-native-clipboard/clipboard';

const Home = ({navigation}: any) => {
  const [dynamiLink, setDynamicLink] = useState('');
  const handleDynamicLink = (link: any) => {
    // Handle dynamic link inside your own application
    if (link?.url === 'https://invertase.io/channel') {
      // ...navigate to your offers screen
      setTimeout(() => {
        navigation.navigate('ChannelDetail');
      }, 20);
    } else {
      Alert.alert('Screen not Found');
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link: any) => {
        if (link?.url === 'https://invertase.io/channel') {
          // ...set initial route as offers screen
          navigation.navigate('ChannelDetail');
        }
      });
  }, []);

  async function buildLink() {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io/channel',
      // domainUriPrefix is created in your Firebase console
      // domainUriPrefix: 'https://deeplinkdemo.page.link',
      domainUriPrefix: 'https://ganeshdeeplink.page.link',

      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });
    setDynamicLink(link);
  }
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 16,
          color: '#000',
          lineHeight: 20,
          textAlign: 'center',
          paddingTop: 30,
        }}>
        {dynamiLink}
      </Text>
      <TouchableOpacity
        onPress={() => {
          buildLink();
        }}
        style={{
          justifyContent: 'center',
          height: 48,
          width: 200,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 8,
          top: '30%',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            lineHeight: 20,
            textAlign: 'center',
          }}>
          Create Deep Links
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Clipboard.setString(dynamiLink);
        }}
        style={{
          justifyContent: 'center',
          height: 48,
          width: 200,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'gray',
          padding: 10,
          borderRadius: 8,
          top: '40%',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            lineHeight: 20,
            textAlign: 'center',
          }}>
          Copy Deep Link
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
