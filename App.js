import React, { useState, useCallback } from "react";
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, SectionList, ActivityIndicator, SafeAreaView, Alert, StatusBar, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal, Pressable, RefreshControl } from 'react-native';
import { Box ,Stack, HStack, VStack, Flex, Spacer, Wrap} from 'react-native-flex-layout';


const wait = (timeout) =>{
    return new Promise(resolve => setTimeout(resolve, timeout))
};

const App = () =>{
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false))
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle = {styles.scrollView}
                refreshControl = {
                    <RefreshControl
                        refreshing = {refreshing}
                        onRefresh = {onRefresh}
                    />
                }
                >
                <Text>Pull down to see RefreshControl indicatore</Text>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default App;