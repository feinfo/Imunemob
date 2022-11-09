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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView>
        <Section style={{marginBottom:10}}>
          <SectionContent>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            Adultos
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .HPV
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ou dTpa-VIP
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Dupla adulto (difteria e tétano) – dT
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Influenza (gripe)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Pneumocócicas
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Herpes zóster
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócica conjugada ACWY ou C
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócica B
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Covid-19
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Tríplice viral(sarampo, caxumba e rubéola)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Varicela (catapora)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Hepatites A, B ou A e B
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Febre amarela
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Dengue
            </Text>
            <Button
              style={{ marginTop: 30 }}
              text="Acessar calendário no portal SBIm"
              status="primary"
              onPress={() => Linking.openURL("https://sbim.org.br/images/calendarios/calend-sbim-adulto.pdf")}
            />
            
          </SectionContent>
        </Section>
        </ScrollView>
      </View>
    </Layout>
  );
}