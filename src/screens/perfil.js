
import React, {useEffect, useState} from 'react';
import { ScrollView, View, Linking, FlatList  } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Section,
  SectionContent,
  Button
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import aplicadores from "../../api";

export default function ({ navigation }) {
     const [data,setData] = useState([])
     const receberAplicadores = () => {
        const response = aplicadores()
        setData(response)
     }
  const { isDarkmode } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Vacinas Adultos"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View onPress={() => alert(item.avatar_url)}
      >
       <Button text="aplicadores" onPress={receberAplicadores}/>
       <FlatList>
        data = [data]
        renderItem={({item,index}) => {
            return(
                <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
                    <Text>{item.login}</Text>
                </View>
            )

        }}
       </FlatList>
      </View>
    </Layout>
  );
}