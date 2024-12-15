import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <ScrollView>
        <Text>Some text</Text>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Text>Hello world</Text>
          <Text>Hi Alex</Text>
          <Text>Hi John</Text>
          <StatusBar style="auto" />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
