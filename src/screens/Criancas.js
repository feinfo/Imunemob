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
        middleContent="Vacinas crianças"
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
            Crianças 0 até 10 anos
            </Text>
            <Text  style={{ textAlign: "left",marginTop:10 }}>
            .Tríplice bacteriana(DTPw ou DTPa) (4)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Haemophilus influenzae b (5)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Poliomielite(vírus inativados) (6)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Pneumocócicasconjugadas (7)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócicas conjugadas ACWY ou C (8)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Meningocócica B (9)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Influenza (gripe) (10)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Febre amarela (11)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Hepatite A (12)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Tríplice viral (sarampo, caxumba e rubéola) (13,15)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Varicela (catapora) (14,15)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .HPV (16)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Vacina tríplice bacteriana acelular do tipo adulto(dTpa) (4)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Dengue (17)
            </Text>
            <Text style={{ textAlign: "left",marginTop:10 }}>
            .Covid-19
            </Text>
            <Button
              style={{ marginTop: 30 }}
              text="Acessar calendário no portal SBIm"
              status="primary"
              onPress={() => Linking.openURL("https://sbim.org.br/images/calendarios/calend-sbim-crianca.pdf")}
            />
            
          </SectionContent>
        </Section>
       </ScrollView>
      </View>
    </Layout>
  );
}