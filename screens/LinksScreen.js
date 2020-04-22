import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri:
            'https://www.fajate.co',
        }}
      />
    </View>
  );
}
