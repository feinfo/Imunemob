import React from "react";
import { ScrollView, View, Linking  } from "react-native";
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

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Vacinas Prematuro"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <ScrollView>
       <Section style={{
            marginBottom:10,
            
            }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Prematuro 0 até 12 meses
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .BCG ID
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Anticorpo monoclonal específico contra o VSR(palivizumabe)
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Hepatite B
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Rotavírus
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Tríplice bacteriana (difteria,tétano, coqueluche)
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Haemophilus influenzae b
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Poliomielite inativada (VIP) 
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Pneumocócica conjugada
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócicas conjugadas ACWY ou C
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócicas B
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Influenza
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Febre amarela
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Imunoglobulina humana anti-hepatite B (IGHAHB)
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Imunoglobulina humana antivaricela zóster (IGHAVZ)
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Imunoglobulina humana antitetânica (IGHAT)
            </Text>
            <Button
              style={{ marginTop: 30 }}
              text="Acessar calendário no portal SBIm"
              status="primary"
              onPress={() => Linking.openURL("https://sbim.org.br/images/calendarios/calend-sbim-prematuro.pdf")}
            />
            
          </SectionContent>
        </Section>
       </ScrollView>
      </View>
    </Layout>
  );
}