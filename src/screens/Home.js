import React from "react";
import { View, Linking, ImageBackground, Image, StyleSheet } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
       <ImageBackground source={require('../../assets/fundo.png')} style={styles.imageBackground}>
      
       
      
        <Section style={{
            marginTop:380,
            
            }}>
        <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Aplicativo de informações sobre vacinas , esquema vacinal e cobertura de doenças para clínicas que usam o Imuneweb disponibilizarem para seus clientes
            </Text>
            
            </SectionContent>
            </Section>
        </ImageBackground>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  imageForeground: {
    width: 250,
    height: 250
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
});