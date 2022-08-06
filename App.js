import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, SectionList, ActivityIndicator, SafeAreaView, Alert, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal, Pressable } from 'react-native';
import { Box ,Stack, HStack, VStack, Flex, Spacer, Wrap} from 'react-native-flex-layout';


const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(255, 030, 055)'
              : '#04F4F8'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
        <Image source={require('./assets/telechargement.jpg')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;