import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, SectionList, ActivityIndicator, SafeAreaView, Alert  } from 'react-native';
import { Box } from 'react-native-flex-layout';
import { Flex, Spacer } from 'react-native-flex-layout';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import { Wrap } from 'react-native-flex-layout';


const Separator = () =>(
  <View style={styles.separator}/>
);

const App = () =>(
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
      he title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Appuyez"
        onPress={()=> Alert.alert('C\'est un test sur le boutton')}
      />
    </View>
    <Separator/>
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Appuyez"
        color='#f194FF'
        onPress={()=> Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator/>
    <View>
      <Text style={styles.title}>
      All interaction for the component are disabled.
      </Text>
      <Button
        title='Appuyez'
        disabled
        onPress={()=>Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator/>
    <View>
      <Text style={styles.title}>
      This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="left button"
          onPress={()=>Alert.alert('Left button pressed')}
        />
        <Button
          title="Right Button"
          onPress={()=>Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title:{
    textAlign: 'center',
    marginVertical: 8
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator:{
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});


/* const App = () =>{
  return(
    <View>
      <Button 
        onPress={onPreLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    );
}
 const onPreLearnMore = ()=>{
  return(
    <Text>Merci d'avoir cliqué</Text>
  )
 } */

/*                  
              ActivityIndicator

const App = () =>{
  return(
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator/>
      <ActivityIndicator size= "large"/>
      <ActivityIndicator size="small" color="#0000ff" hidesWhenStopped ="false"/>
      <ActivityIndicator size="large" color="00ff00" animating='true'/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

*/
export default App;