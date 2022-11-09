import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, {useEffect} from 'react'
import LottieView from 'lottie-react-native'
import vacinaJason from '../../assets/vacina.json'
import { CommonActions, useNavigation } from '@react-navigation/native'



const Splash = () => {

    const size = Dimensions.get('window').width * 1.3
    const navigation = useNavigation()

    useEffect(() => {
       setTimeout(() => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{name: 'MainTabs'}]
        }))
    
      },4000);
    }, [])
    
  return (
    <View style={styles.container}>
        <LottieView  source={vacinaJason} style={{width: size, height: size}}
        autoPlay
        loop={true}>
         
        </LottieView>
    </View>
      
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default Splash