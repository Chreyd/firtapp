import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, SectionList, ActivityIndicator, SafeAreaView, Alert, StatusBar, TouchableOpacity   } from 'react-native';
import { Box } from 'react-native-flex-layout';
import { Flex, Spacer } from 'react-native-flex-layout';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import { Wrap } from 'react-native-flex-layout';



const DATA= [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Iteme'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
];



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});





/* const Item = ({title}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const App = ()=>{
  const renderItem = ({item}) =>(
    <Item title={item.title}/>
  );

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
} */
















/*                  
              Button


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
*/

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