import React, { useState, useCallback } from "react";
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, SectionList, ActivityIndicator, SafeAreaView, Alert, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal, Pressable, RefreshControl } from 'react-native';
import { Box ,Stack, HStack, VStack, Flex, Spacer, Wrap} from 'react-native-flex-layout';


const App = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} >
                <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingTop : StatusBar.currentHeight
    },
    scrollView :{
        backgroundColor: '#0904FA',
        marginHorizontal : 20
    },
    text:{
        fontSize : 42
    }
})

  export default App;