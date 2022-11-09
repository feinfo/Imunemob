import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Button, View, SafeAreaView,
  Text, ImageBackground, Pressable
} from 'react-native';
import { Linking, ToastAndroid } from 'react-native';



const openUrl = async(url) => {
    if(await Linking.canOpenURL(url)) {
      await Linking.openURL(url)
    }
    else {
      ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
    }
  }

export default function Home(props) {
    const { onPress, title = 'ENTRAR' } = props;
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/back.png')} style= {styles.imageBackground}>
    <View style={styles.view}>
    <Pressable  
    
    onPress={()=>{Linking.openURL('https://aplicativo.imunemob.com.br'); 
    }}
    style={styles.button} >
    <Text style={styles.text}>{title}</Text>
    </Pressable>
    </View>
  
</ImageBackground>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    
  },

button: {
    alignItems: 'center',
    justifyContent: 'center',
    
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#81a6d3',
    marginVertical:-60,
    
  
},
view: {
    flex: 1,
    marginTop: '150%',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
