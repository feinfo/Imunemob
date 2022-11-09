
import { ScrollView } from 'react-native';  
import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  TopNav
} from "react-native-rapi-ui";

  
export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
     
        return (  
            <Layout>
            <TopNav
            
            middleContent="Calendário de Vacinação"/> 
             <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
            <ScrollView>
            <Section style={{
            marginBottom:20,
            
            }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Prematuro 0 até 12 meses
            </Text>
            
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Prematuro");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Crianças 0 até 10 anos
            </Text>
            
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Criancas");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Adolescentes 10 até 19 anos
            </Text>
           
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Adolescentes");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Adultos
            </Text>
           
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Adulto");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Gestantes
            </Text>
           
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Gestante");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Idosos
            </Text>
           
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Idoso");
              }}
            />
            
          </SectionContent>
        </Section>
        <Section style={{marginBottom:20}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Ocupacional
            </Text>
           
            <Button
              style={{ marginTop: 20 }}
              text="Clique para ver detalhes das vacinas"
              status="primary"
              onPress={() => {
                navigation.navigate("Ocupacional");
              }}
            />
            
          </SectionContent>
        </Section>



            </ScrollView>    
            </View>  
           
            </Layout>
        );  
    }  
