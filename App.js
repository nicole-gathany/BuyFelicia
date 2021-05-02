import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button, Platform} from 'react-native';



export default function App() {
  console.log("App executed, but not dead"); 
  return (
    <SafeAreaView style={styles.container}>
      
        <Button 
        title="My button"
         onPress={()=>
        Alert.prompt("My title", "My message", text => console.log(text) )}
          />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    
  },

});
