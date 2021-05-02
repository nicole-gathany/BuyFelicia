import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';



export default function App() {
  console.log("App executed, but not dead"); 
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TextInput style={{
          height: 40,
          width: 100,
          borderColor: 'gray',
          borderWidth: 1}}
          defaultValue="Hi, app"
          />
          {/* <Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAO4JaTYCaqGzut4Ie4kSFQB8pENgbBP47A&usqp=CAU"></Image> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

// const tina = {
//   uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAO4JaTYCaqGzut4Ie4kSFQB8pENgbBP47A&usqp=CAU",
//   height=64,
//   width=64
// },

});
