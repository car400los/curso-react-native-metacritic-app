import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"}} style={{width: 215, height: 294}}/>
      <StatusBar style="light" />
      <Text style={{color: 'white'}}>Tenemos aquí la app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
