import { StatusBar } from 'expo-status-bar';
import { userState } from "react";
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
     getLatestGames().then((games) => 
      setGames(games));
  }


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"}} style={{width: 215, height: 294}}/>

       <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert('Hola')}
       >
        <Text style={{color: 'white',}}>Pulsa aquí</Text>
      </TouchableHighlight>
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
